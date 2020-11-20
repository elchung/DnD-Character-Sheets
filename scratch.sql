CREATE TABLE character_data (
	character_id primary key
	user TEXT not null,
	name TEXT,
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
	prepared_spells TEXT[],
	character_ability_scores_id INT FOREIGN KEY references character_ability_scores(id),
	character_death_save_id INT FOREIGN KEY references character_death_saves(id),
	character_known_spells_id INT FOREIGN KEY references character_known_spells(id),
	character_spell_slots_id INT FOREIGN KEY references character_spell_slots(id),
	character_treasure_id INT FOREIGN KEY references character_treasure(id),
	character_sheet_settings_id INT FOREIGN KEY references character_sheet_settings(id)
);

CREATE TABLE character_ability_scores (  # 1:1
	id SERIAL primary key
	strength 	 INT,
	dexterity    INT,
	constitution INT,
	intelligence INT,
	wisdom		 INT,
	charisma     INT,
	
);

CREATE TABLE character_hit_dice (  # 1:n
	id SERIAL primary key,
	character_id INT not null references character_data(character_id),
	num_dice  INT not null,
	dice_type INT not null,
	num_used  INT not null
);

CREATE TABLE character_death_saves (  # 1:1
	id SERIAL primary key
	successes INT not null,
	failures  INT not nu c6ll
);

CREATE TABLE character_known_spells (  # 1:1
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

CREATE TABLE character_features_and_traits (  # 1:n
	id serial primary key,
	character_id INT not null references character_data(character_id),  --points to parent, since there can be many features
	character_features_and_traits_description_id INT FOREIGN KEY references character_feature_and_traits_description(id) --points to descriptoin table, since only 1:1
);

CREATE TABLE character_feature_and_traits_description (  # 1:1
	id serial primary key,
	title TEXT not null,
	body  TEXT
);

CREATE TABLE character_spell_slots (  # 1:1
    id serial primary key,
    zero_id INT FOREIGN KEY references character_spell_slot_data(id),
    one_id INT FOREIGN KEY references character_spell_slot_data(id),
    two_id INT FOREIGN KEY references character_spell_slot_data(id),
    three_id INT FOREIGN KEY references character_spell_slot_data(id),
    four_id INT FOREIGN KEY references character_spell_slot_data(id),
    five_id INT FOREIGN KEY references character_spell_slot_data(id),
    six_id INT FOREIGN KEY references character_spell_slot_data(id),
    seven_id INT FOREIGN KEY references character_spell_slot_data(id),
    eight_id INT FOREIGN KEY references character_spell_slot_data(id),
    nine_id INT FOREIGN KEY references character_spell_slot_data(id)
);

CREATE TABLE character_spell_slot_data (
    id serial primary key,
    max INT,
    used INT
);

CREATE TABLE character_treasure (
	id serial primary key,
	money_id INT FOREIGN KEY references character_treasure_money(id),
	items_id INT FOREIGN KEY references character_treasure_items(id)
);

CREATE TABLE character_treasure_money (
	id       serial primary key,
	gold     INT,
	silver   INT,
	electrum INT,
	copper   INT
);

CREATE TABLE character_treasure_items (
	id serial primary key,
	name TEXT,
	quantity INT,
	weight_in_lbs INT,
	bookmarked BOOL,
	magical BOOL,
	description_text TEXT
);


CREATE TABLE character_sheet_settings (
	id serial primary key,
	ability_score_on_top BOOL
);

ALTER DEFAULT PRIVILEGES IN SCHEMA public 
	GRANT SELECT, INSERT, UPDATE, DELETE ON tables TO public;

-- character_sheet_settings
-- character_treasure_items
-- character_treasure_money
-- character_treasure
-- character_spell_slot_data
-- character_spell_slots
-- character_feature_and_traits_description
-- character_features_and_traits
-- character_known_spells
-- character_death_saves
-- character_data
-- character_hit_dice
-- character_ability_scores