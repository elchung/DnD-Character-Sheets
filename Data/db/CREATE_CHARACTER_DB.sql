CREATE DATABASE dnd_db;

CREATE TABLE spell_info (
    name TEXT PRIMARY KEY,
    classes TEXT [],
    ritual BOOL,
    description TEXT,
    duration TEXT,
    level SMALLINT,
    range TEXT,
    school TEXT,
    duration TEXT,
    components JSON,
    tags TEXT [],
    casting_time TEXT,
    type TEXT
)

CREATE TABLE classes (
    name TEXT PRIMARY KEY,
    hit_die SMALLINT,
    proficiency_choices JSON,
    proficiencies JSON,
    saving_throws TEXT [],
    starting_equipment TEXT [],

)
