#!/usr/bin/env python3
r"""Genere les videos verticales dans le cloud a partir de scripts.

Pour chaque dossier projects/<nom>/script.txt :
- voix francaise (edge-tts), sous-titres (SRT) ;
- video 1080x1920 avec visuels de fond (visuals/ du projet, sinon visuals/ partages).
Sortie : output/<nom>/video.mp4 + voice.mp3 + subs.srt
"""
import asyncio
import pathlib
import re
import subprocess
import sys

import edge_tts

RACINE = pathlib.Path(__file__).resolve().parent
PROJETS = RACINE / "projects"
PARTAGES = RACINE / "visuals"
SORTIE = RACINE / "output"
VOIX = "fr-FR-DeniseNeural"
EXT = {".jpg", ".jpeg", ".png", ".webp"}


def lire_script(chemin):
    lignes = []
    for ligne in chemin.read_text(encoding="utf-8").splitlines():
        s = ligne.strip()
        if not s or s.startswith("TITRE :") or (s.startswith("[") and s.endswith("]")):
            continue
        lignes.append(s)
    return "\n".join(lignes).strip()


async def voix(texte, mp3, srt):
    com = edge_tts.Communicate(texte, VOIX)
    cues = []
    with mp3.open("wb") as f:
        async for chunk in com.stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                cues.append((chunk["offset"], chunk["duration"], chunk["text"]))
    def temps(t):
        s = t / 10_000_000
        return f"{int(s//3600):02}:{int(s%3600//60):02}:{s%60:06.3f}".replace(".", ",")
    blocs = []
    for i, (off, dur, txt) in enumerate(cues, 1):
        blocs.append(f"{i}\n{temps(off)} --> {temps(off + dur)}\n{txt}\n")
    srt.write_text("\n".join(blocs), encoding="utf-8")


def duree(mp3):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=nw=1:nk=1", str(mp3)], capture_output=True, text=True)
    return float(r.stdout.strip() or 10)


def visuels(projet):
    locaux = sorted(p for p in (projet / "visuals").glob("*") if p.suffix.lower() in EXT) if (projet / "visuals").exists() else []
    return locaux or sorted(p for p in PARTAGES.glob("*") if p.suffix.lower() in EXT)


def video(projet, mp3, srt, sortie):
    d = duree(mp3)
    imgs = visuels(projet)
    chemin_srt = srt.as_posix().replace(":", r"\:")
    filtre = ("scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,"
              f"subtitles='{chemin_srt}':force_style='FontName=Arial,FontSize=42,"
              "PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Alignment=2,MarginV=120'")
    if imgs:
        liste = sortie.with_suffix(".txt")
        lignes = []
        for img in imgs:
            lignes += [f"file '{img.as_posix()}'", f"duration {d / len(imgs):.3f}"]
        lignes.append(f"file '{imgs[-1].as_posix()}'")
        liste.write_text("\n".join(lignes), encoding="utf-8")
        entree = ["-f", "concat", "-safe", "0", "-i", str(liste)]
    else:
        entree = ["-f", "lavfi", "-i", "color=c=0x0b0f18:s=1080x1920:r=30"]
    cmd = ["ffmpeg", "-y", *entree, "-i", str(mp3), "-vf", filtre,
           "-c:v", "libx264", "-preset", "veryfast", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "128k", "-shortest", str(sortie)]
    subprocess.run(cmd, check=True)


async def main():
    SORTIE.mkdir(exist_ok=True)
    dossiers = sorted(p for p in PROJETS.iterdir() if (p / "script.txt").exists())
    ok = 0
    for p in dossiers:
        texte = lire_script(p / "script.txt")
        if not texte:
            continue
        out = SORTIE / p.name
        out.mkdir(parents=True, exist_ok=True)
        mp3, srt, mp4 = out / "voice.mp3", out / "subs.srt", out / "video.mp4"
        try:
            await voix(texte, mp3, srt)
            video(p, mp3, srt, mp4)
            ok += 1
            print(f"OK {p.name}")
        except Exception as e:
            print(f"ERREUR {p.name}: {e}", file=sys.stderr)
    print(f"Termine : {ok}/{len(dossiers)} videos generees")


if __name__ == "__main__":
    asyncio.run(main())
