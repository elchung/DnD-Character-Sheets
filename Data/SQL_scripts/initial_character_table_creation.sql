CREATE TABLE character_ability_scores (
	id SERIAL primary key,
	strength 	 INT,
	dexterity    INT,
	constitution INT,
	intelligence INT,
	wisdom		 INT,
	charisma     INT
);

CREATE TABLE character_death_saves (
	id SERIAL primary key,
	successes INT not null default 0,
	failures  INT not null default 0
);

CREATE TABLE character_known_spells (
  id SERIAL primary key,
	zero  TEXT[],
	one   TEXT[],
	two   TEXT[],
	three TEXT[],
	four  TEXT[],
	five  TEXT[],
	six   TEXT[],
	seven TEXT[],
	eight TEXT[],
	nine  TEXT[]
);

CREATE TABLE character_features_and_traits_description (
	id serial primary key,
	title TEXT not null DEFAULT '',
	body  TEXT not null default ''
);

CREATE TABLE character_spell_slot_data (
    id serial primary key,
    max INT NOT NULL DEFAULT 0,
    used INT NOT NULL DEFAULT 0
);

CREATE TABLE character_spell_slots (
    id serial primary key,
    one_id INT not null references character_spell_slot_data(id) on delete cascade,
    two_id INT not null references character_spell_slot_data(id) on delete cascade,
    three_id INT not null references character_spell_slot_data(id) on delete cascade,
    four_id INT not null references character_spell_slot_data(id) on delete cascade,
    five_id INT not null references character_spell_slot_data(id) on delete cascade,
    six_id INT not null references character_spell_slot_data(id) on delete cascade,
    seven_id INT not null references character_spell_slot_data(id) on delete cascade,
    eight_id INT not null references character_spell_slot_data(id) on delete cascade,
    nine_id INT not null references character_spell_slot_data(id) on delete cascade
);

CREATE TABLE character_treasure_money (
	id       serial primary key,
	gold     INT not null default 0,
	silver   INT not null default 0,
	electrum INT not null default 0,
	copper   INT not null default 0
);

CREATE TABLE character_treasure (
    id serial primary key,
    money_id INT not null references character_treasure_money(id) on delete cascade
    --treasure items points to this
);

CREATE TABLE character_treasure_items (
	id serial primary key,
	name TEXT not null,
	quantity INT,
	weight_in_lbs INT,
	bookmarked BOOL not null default false,
	magical BOOL not null default false,
	description_text TEXT,
    treasure_id INT references character_treasure(id)
);


CREATE TABLE character_sheet_settings (
	id serial primary key,
	ability_score_on_top BOOL not null default true
);

CREATE TABLE character_data (
	character_id serial primary key,
	user_name TEXT not null,
	character_name TEXT,
	level TEXT,
	class TEXT,
	background TEXT,
	race TEXT,
	spellcasting_ability TEXT,
	experience INT,
	proficiency_bonus INT,
	inspiration INT,
	armor_class INT,
	initiative INT,
	speed INT,
	max_hp INT,
	temp_hp INT,
	current_hp INT,
	hp_history INT[],
	skill_proficiencies TEXT[],
	saving_throw_proficiencies TEXT[],
	skill_expertise TEXT[],
	general_proficiencies TEXT[],
	known_languages TEXT[],
	tool_and_other_proficiencies TEXT[],
	prepared_spells TEXT[],
	character_ability_scores_id INT references character_ability_scores(id) on delete cascade,
	character_death_save_id INT not null not null references character_death_saves(id) on delete cascade,
	character_known_spells_id INT not null references character_known_spells(id) on delete cascade,
	character_spell_slots_id INT not null references character_spell_slots(id) on delete cascade,
	character_treasure_id INT not null references character_treasure(id) on delete cascade,
	character_sheet_settings_id INT not null references character_sheet_settings(id) on delete cascade
);

CREATE TABLE character_hit_dice (
	id SERIAL primary key,
	num_dice  INT not null,
	dice_type INT not null,
	num_used  INT not null,
	character_id INT not null references character_data(character_id) on delete cascade
);

CREATE TABLE character_features_and_traits (
	id serial primary key,
	character_id INT not null references character_data(character_id),
	character_features_and_traits_description_id INT references character_features_and_traits_description(id) on delete cascade
);
