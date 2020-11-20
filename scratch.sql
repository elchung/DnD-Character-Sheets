CREATE TABLE character_data (
	user 	    		    	TEXT not null,
	name 		        		TEXT,
	level 			    	    TEXT,
	class 				        TEXT,
	background 		    	    TEXT,
	race 		    		    TEXT,
    spellcasting_ability        TEXT,
	experience 			        INT,
	proficiency_bonus    	    INT,
	inspiration     		    INT,
	armor_class 		        INT,
	initiative 		            INT,
	speed 	        			INT,
	max_hp  			        INT,
	temp_hp 			        INT,
	current_hp		        	INT,
	hp_history          		INT[],
	skill_proficiencies         TEXT[],
	saving_throw_proficiencies  TEXT[],
	skill_expertise             TEXT[],
	general_proficiencies       TEXT[],
    prepared_spells             TEXT[],

);

CREATE TABLE character_ability_scores (
	character_data_id bigint not null,
		constraint character_ability_scores_fk
			references character_data
		constraint character_ability_scores_pkey
			PRIMARY KEY
	strength 	 INT,
	dexterity    INT,
	constitution INT,
	intelligence INT,
	wisdom		 INT,
	charisma     INT
);

CREATE TABLE character_hit_dice (
	character_data_id bigint not null,
		constraint character_hit_dice_fk
			references character_data
	num_dice  INT not null,
	dice_type INT not null,
	num_used  INT not null
);

CREATE TABLE character_death_saves (
	character_data_id bigint not null,
		constraint character_ability_scores_fk
			references character_data
	successes INT not null,
	failures  INT not nu c6ll
);

CREATE TABLE character_known_spells (
    character_data_id bigint not null,
        constraint character_known_spells_fk
            references character_data,
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

CREATE TABLE character_features_and_traits (
	id serial primary key,
	description [from other table character_feature_and_traits_description]
);

CREATE TABLE character_feature_and_traits_description (
    id serial primary key,
	title TEXT not null,
	body  TEXT
);

CREATE TABLE character_spell_slots (
    id serial primary key,
    zero  ,
    one   ,
    two   ,
    three ,
    four  ,
    five  ,
    six   ,
    seven ,
    eight ,
    nine
);

CREATE TABLE character_spell_slot_data (
    id serial primary key,
    max INT,
    used INT
);

CREATE TABLE character_treasure (
    money references character_money,
    items references character_treasure_items
);

CREATE TABLE character_treasure_money (
    id       serial primary key,
    gold     INT,
    silver   INT,
    electrum INT,
    copper   INT
);

CREATE TABLE character_treasure_items (
        name TEXT,
        quantity INT,
        weight INT,
        bookmarked bool,
        magical: bool
        description: String

);


CREATE TABLE user_settings (
	ability_score_on_top BOOL
);

alter table table_name owner to admin_name;
grant select,insert,delete,update on table table_name to user_name;

