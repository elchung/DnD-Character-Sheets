WITH ins0 AS (
   INSERT INTO siteInfo (siteName, siteHost, notes, ... )
   VALUES ('Sample', 'sample.com', 'note', ... );
   RETURNING siteid
   )
INSERT INTO siteLinks (siteID, URL)
SELECT siteid, 'test'
FROM   ins0;


------- Table A -------    -------- Table B --------    -------- Table C --------
id  | serial NOT NULL      id   | serial NOT NULL       id   | serial NOT NULL
foo | character varying    a_id | integer NOT NULL      b_id | integer NOT NULL
                           bar  | character varying     baz  | character varying

WITH Y AS (
  INSERT INTO A (foo)
  VALUES ('abc')
  RETURNING id
), x as (
  INSERT INTO B (a_id, bar)
  SELECT id, 'def'
  FROM Y
  RETURNING id
)
INSERT INTO C (b_id, baz)
SELECT id, 'ghi'
FROM X;


uinsert ito nested tables first

--write caracter_feature_and_traits_description title+body, then character_features_and_traits, save cfat_id

--write character_hit_dice, save chd_id
--write character_ability_scores, save cas_id
--write character_death_saves, save cds_id
--character_known_spells (list of strings)
--write character_spell_slot_data for each level spell in character_spell_slots, save css_id
--write character_treasure_money, save into money_id in character_treasure, same for character_treasure_items, then save ct_id
--write character_sheet_settings, save settings_id,

-- look into  this https://dba.stackexchange.com/questions/218234/how-to-perform-multiple-inserts-into-postgresql-database-in-one-query

write all to character_data table

with _something_ as (
	insert into _table_name_
		(column1, column2)
	values
		(val1, val2)
	returning serialized-id-name 
), 