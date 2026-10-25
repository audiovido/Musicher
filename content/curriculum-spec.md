# MUSICHER – Curriculum Spec v1 (source of truth for lesson generation)

This file is read by the app builder (AI Studio) to generate lesson JSON files.
Written by the project advisor. Do not invent lessons outside this file.

## 0. Global rules for every generated lesson
- Same JSON structure as content/lessons/lesson-24.json (title, chapter, minutes, goal, see, imageUrl, steps, selfCheck, quiz, summary, tomorrow, source, practice, optional diagram).
- English + casual friendly Persian (short sentences, «می‌زنی/می‌خونی», not formal «می‌نوازید/قرار دارد»).
- 5–7 minutes, ONE new idea per lesson, 3 short steps, 2 self-check lines, 2 quiz questions with a short "why".
- Musically correct. Do not invent theory, terms or history. If unsure, keep it general.
- Only original text. Melodies only if public domain (folk/traditional or composer died before 1950) and only the melody line.
- Never include contemporary Persian radif notations, published recordings, modern editions or pop songs.
- Source field: "Original MUSICHER content" (fa: «محتوای اختصاصی MUSICHER»); add "melody: traditional/composer, public domain" when a melody is used.
- One common-mistake entry per lesson in content/mistakes.json (EN + FA, with lesson id and course id).
- Lessons marked [TEACHER] are generated as drafts with "review": "teacher" in the JSON and a small "Draft – under teacher review" badge in the UI.
- File naming: content/courses/<courseId>/lesson-NN.json. Piano keeps its current files.
- Images: no per-lesson image. Use the auto cover (see section 2). Only the course card uses assets/course-<courseId>.jpeg.

## 1. Practice types (the "practice" field). One practice per lesson.
- keyboard-follow: {"type":"keyboard-follow","tempo":60,"hand":"right|left|both","notes":["C4","D4"]}  (exists)
- rhythm-tap: {"type":"rhythm-tap","tempo":70,"meter":"4/4","pattern":"1 1 1 1 | 0.5 0.5 1 r1 1"}  durations in beats, r = rest, | = bar line. App plays a click, learner taps (screen or space bar), app scores timing (early/late/on time).
- ear-choice: {"type":"ear-choice","mode":"higher-lower|same-different|step-skip|major-minor|interval","rounds":6}  App generates sounds with Web Audio and asks a multiple-choice question.
- listen-sing: {"type":"listen-sing","tempo":60,"notes":["C4","D4","E4"]}  App plays a reference tone/melody, learner sings it back, then self-checks (no microphone in v1).
- timer: {"type":"timer","seconds":30,"cue":"..."}  breathing, posture, holding a tone.
- fretboard: {"type":"fretboard","instrument":"guitar|violin|setar|tar","positions":["1:0","1:1","1:3"]}  string:fret (string 1 = highest/thinnest). App draws the neck and lights the positions in order. "Follow me" = tap the position.
- chord-diagram: {"type":"chord-diagram","instrument":"guitar","chords":["Em","Am"],"strum":"D D D D"}
- santur-map: {"type":"santur-map","notes":["E4","F4","G4"]}  App draws the santur bridges and lights the notes.

## 2. Auto cover art (replaces per-lesson images for new courses)
Code-drawn SVG cover for each lesson: paper background, the course instrument icon (line art), a subtle girih pattern corner, the lesson number in a saffron badge, and the chapter accent color (red / saffron / teal rotating). Fits the existing arch frame.

## 3. Courses and order of building
1. piano (finish lessons 25–36)
2. rhythm (shared foundation for every learner)
3. ear (shared)
4. voice
5. guitar
6. setar [TEACHER]
7. tar [TEACHER]
8. violin
9. santur [TEACHER]

---

## piano (lessons 25–36, same files as now: content/lessons/lesson-25..36.json)
Ch7 Chords
- 25 What is a chord: build C–E–G and play it together. keyboard-follow ["C4","E4","G4"]
- 26 Major and minor: C major vs C minor (E♭), happy vs sad sound. keyboard-follow ["C4","E4","G4","C4","D#4","G4"]
- 27 Three main chords: C, F, G with the left hand (I–IV–V). keyboard-follow hand left ["C3","E3","G3","F3","A3","C4","G3","B3","D4"]
- 28 Piece: Ode to Joy with chords (Beethoven, PD): right-hand melody + left-hand C and G chords. keyboard-follow both
Ch8 Fluent reading (add code-drawn staff diagrams)
- 29 Bass clef: notes for the left hand. diagram "bass-clef"
- 30 Grand staff: two staves, Middle C between them. diagram "grand-staff"
- 31 Reading patterns: read shapes (up, down, skip) not single letters.
- 32 Loud and soft: p, f, crescendo, diminuendo.
Ch9 Ear and next steps
- 33 Ear 1: higher/lower, same/different, step or skip. ear-choice
- 34 Ear 2: major or minor. ear-choice major-minor
- 35 What the piano cannot play: quarter tones in Persian music, concept only. [TEACHER]
- 36 Final piece and report: Für Elise opening theme, right hand (Beethoven, PD) + course review + advisor report + what is next.

## rhythm (12 lessons) – for everyone, no instrument needed
Ch1 Pulse
- 1 Feel the pulse: tap a steady beat with the click. rhythm-tap "1 1 1 1 | 1 1 1 1"
- 2 Tempo: slow, medium, fast; the beat stays even.
- 3 Long and short: quarter and half notes. "1 1 2 | 2 2"
- 4 Silence counts: rests. "1 r1 1 r1 | 2 r2"
Ch2 Inside the beat
- 5 Eighth notes: "0.5 0.5 1 0.5 0.5 1"
- 6 Measures and meters: 2/4, 3/4, 4/4.
- 7 Dotted notes: dotted half and dotted quarter. "1.5 0.5 1 1"
- 8 Ties across the bar line.
Ch3 Rhythm of the world
- 9 Triplets: three in one beat.
- 10 6/8 feel: two big beats, three small (common in Persian folk dance music). meter 6/8
- 11 Odd meters: 5/8 and 7/8 as groups of 2 and 3 (common in Eastern music).
- 12 Rhythm challenge: review all patterns.

## ear (10 lessons) – for everyone
- 1 High or low. ear-choice higher-lower
- 2 Same or different. ear-choice same-different
- 3 Step or skip. ear-choice step-skip
- 4 Melody direction: up, down, wave.
- 5 Small intervals: 2nd and 3rd. ear-choice interval
- 6 Big intervals: 4th, 5th, octave. ear-choice interval
- 7 Major or minor chord. ear-choice major-minor
- 8 Echo me: sing back a 3-note pattern. listen-sing
- 9 Hearing a quarter tone: semitone vs koron, concept and listening only. [TEACHER]
- 10 Ear review game.

## voice (24 lessons)
Ch1 Body and breath
- 1 Posture for singing. timer 30
- 2 Belly breathing (low, quiet breath). timer
- 3 Long "sss": control the air. timer 20
- 4 Warm-up: humming and lip trills. listen-sing
Ch2 Finding pitch
- 5 Match one note. listen-sing ["C4"] (men may sing an octave lower; explain)
- 6 Sirens: slide low to high and back.
- 7 Five-note scale (do–sol). listen-sing ["C4","D4","E4","F4","G4"]
- 8 Your comfortable range (no straining).
Ch3 Tone
- 9 Vowel shapes: a, e, i, o, u.
- 10 Forward resonance: humming into "ma".
- 11 Louder without strain.
- 12 Voice care: water, rest, no shouting, stop if it hurts.
Ch4 Scales and intervals
- 13 The major scale with solfege. listen-sing C major
- 14 Thirds: do–mi, re–fa.
- 15 Arpeggio do–mi–sol–do.
- 16 Singing from note names.
Ch5 Rhythm and words
- 17 Singing with the click. rhythm-tap + sing
- 18 Clear consonants (diction).
- 19 Phrases and breath marks.
- 20 First song: Ode to Joy melody sung on "la" (Beethoven, PD).
Ch6 Expression
- 21 Soft and loud in a phrase.
- 22 Legato singing.
- 23 Persian vocal color: what tahrir is, concept and gentle exercise only. [TEACHER]
- 24 Final song (Twinkle / Ah vous dirai-je maman, PD) + daily routine.

## guitar (24 lessons)
Ch1 Hello guitar
- 1 Parts of the guitar and how to hold it.
- 2 String names E A D G B E (6 to 1). fretboard open strings
- 3 Tuning with reference tones (app plays each string note).
- 4 Picking hand: thumb/pick on open strings. rhythm-tap on open E
Ch2 First notes
- 5 Frets and left-hand finger numbers (1–4).
- 6 Notes on string 1: E F G. fretboard ["1:0","1:1","1:3"]
- 7 Notes on string 2: B C D. fretboard ["2:0","2:1","2:3"]
- 8 First melody: Ode to Joy on strings 1–2 (PD). fretboard
Ch3 First chords
- 9 Reading chord diagrams.
- 10 Em and Am. chord-diagram
- 11 Changing chords smoothly. chord-diagram ["Em","Am"]
- 12 Strumming down in 4/4. chord-diagram strum "D D D D"
Ch4 More chords
- 13 C major chord.
- 14 G major chord.
- 15 D major chord.
- 16 Down-up strumming. strum "D D U D U"
Ch5 Technique
- 17 Alternate picking.
- 18 Bass note + strum pattern.
- 19 Strumming in 3/4.
- 20 Reading tab.
Ch6 Next steps
- 21 Song with chords: When the Saints Go Marching In (traditional, PD), G–C–D.
- 22 Minor pentatonic, first box.
- 23 First fingerpicking pattern.
- 24 Review and practice routine.

## setar (20 lessons) [TEACHER for all]
Use note names, not fret numbers, for fretted notes (tuning differs between teachers). The teacher confirms tuning and fret map before publishing.
Ch1 Meet the setar: 1 parts and short background; 2 sitting and holding; 3 strings and tuning concept (reference tones); 4 the index-finger stroke (outward and inward).
Ch2 First notes: 5 frets (pardeh) and left-hand fingers; 6 first notes on the first string; 7 strokes with rhythm (rhythm-tap); 8 first short folk melody (traditional, PD).
Ch3 Persian intervals: 9 what koron and sori are; 10 the koron frets; 11 hearing Shur as a mode (concept, no radif notation); 12 a short phrase in Shur written by MUSICHER.
Ch4 Sound and ornaments: 13 riz (tremolo) basics; 14 simple ornaments; 15 dynamics on setar; 16 practice routine.
Ch5 Review: 17 rhythm review; 18 melody review; 19 listening guide (describe, no recordings); 20 final review and next steps.

## tar (20 lessons) [TEACHER for all]
Same structure as setar, adapted: mezrab (plectrum) instead of finger stroke, 6 strings in courses, mezrab strokes rast/chap/riz. Same note-name rule and teacher check.

## violin (20 lessons)
Ch1 1 parts and holding the violin; 2 holding the bow; 3 open strings G D A E (fretboard instrument violin, open strings); 4 whole-bow and half-bow strokes.
Ch2 5 first finger pattern on A string (A B C♯ D); 6 same pattern on E string; 7 first melody (Twinkle, PD); 8 string crossing.
Ch3 9 rhythm with the bow (rhythm-tap); 10 intonation: listening and tapes; 11 Ode to Joy (PD); 12 slurs with the bow.
Ch4 13 dynamics with the bow; 14 second finger pattern; 15 D major scale one octave; 16 simple PD folk melody.
Ch5 17 vibrato preparation (concept); 18 practice routine; 19 review game; 20 final piece and next steps.

## santur (16 lessons) [TEACHER for all]
Ch1 1 parts of the santur and how to sit; 2 holding the mezrab (mallets); 3 the bridges map (santur-map); 4 alternating right and left strokes.
Ch2 5 first notes on the middle bridges; 6 short melodic patterns; 7 rhythm with strokes; 8 first folk melody (traditional, PD).
Ch3 9 riz (tremolo) basics; 10 koron by moving a bridge (concept, teacher shows); 11 Shur as a mode (concept); 12 a short phrase written by MUSICHER.
Ch4 13 dynamics; 14 practice routine; 15 review; 16 final review and next steps.
