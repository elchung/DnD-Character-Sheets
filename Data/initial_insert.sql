
--write caracter_feature_and_traits_description title+body, then character_features_and_traits, save cfat_id

--write character_ability_scores, save cas_id
--write character_hit_dice, save chd_id
--write character_death_saves, save cds_id
--character_known_spells (list of strings)
--write character_spell_slot_data for each level spell in character_spell_slots, save css_id
--write character_treasure_money, save into money_id in character_treasure, same for character_treasure_items, then save ct_id
--write character_sheet_settings, save settings_id,
--write all to character_data table

--variable_name could be like character_hit_dice_insert or somehing
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


WITH character_ability_scores_query as (
    INSERT INTO character_ability_scores (strength, dexterity, constitution, intelligence, wisdom, charisma)
        VALUES (8, 14, 10, 18, 14, 12)
    RETURNING id as ability_scores_id
), character_death_saves_query as (
    INSERT INTO charcter_death_saves (successes, failures)
        VALUES (0, 0)
    RETURNING id as death_saves_id
), character_known_spells_query as (
    INSERT INTO character_known_spells (zero, one, two)
        VALUES ('{mage hand, minor illusion, prestidigitation, toll the dead}', '{charm person, detect magic, find familiar, fog cloud, grease, mage armor, magic missile, shield}', '{invisibility, knock, misty step, web}')
    RETURNING id as known_spells_id
), character_sheet_settings_query as (
    INSERT INTO character_sheet_settings (ability_score_on_top)
        VALUES (true)
    RETURNING id as settings_id
), character_spell_slot_data_query


character_feature_and_traits_description_query as (
    INSERT INTO  character_feature_and_traits_description (title, body)
        VALUES ('Alert', 'You can''t be surprised while conscious. You have a +5 bonus to initiative rolls. Other creatures also don''t gain advantage on attack rolls against you as a result of being hidden from you.')
    RETURNING id as features_and_traits_description_id
)



character_treasure_money_query as (
    INSERT INTO character_treasure_money (gold, silver, electrum, copper)
        VALUES (33, 0, 0, 0)
    returning id as money_id
), character_treasure_
