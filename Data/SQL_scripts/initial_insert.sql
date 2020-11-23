
WITH character_ability_scores_query as (
    INSERT INTO character_ability_scores (strength, dexterity, constitution, intelligence, wisdom, charisma)
        VALUES (8, 14, 10, 18, 14, 12)
    RETURNING id
), character_death_saves_query as (
    INSERT INTO character_death_saves (successes, failures)
        VALUES (0, 0)
    RETURNING id
), character_known_spells_query as (
    INSERT INTO character_known_spells (
      zero,
      one,
      two
    )
        VALUES (
          '{mage hand, minor illusion, prestidigitation, toll the dead}',
          '{charm person, detect magic, find familiar, fog cloud, grease, mage armor, magic missile, shield}',
          '{invisibility, knock, misty step, web}'
        )
    RETURNING id
), character_sheet_settings_query as (
    INSERT INTO character_sheet_settings (ability_score_on_top)
        VALUES (true)
    RETURNING id
), character_spell_slot_data_query_one as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (4, 0)
    RETURNING id
), character_spell_slot_data_query_two as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (3, 0)
        RETURNING id
), character_spell_slot_data_query_three as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_four as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_five as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_six as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_seven as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_eight as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slot_data_query_nine as (
    INSERT INTO character_spell_slot_data (max, used)
        VALUES (0, 0)
        RETURNING id
), character_spell_slots_query as (
    INSERT INTO character_spell_slots (one_id, two_id, three_id, four_id, five_id, six_id, seven_id, eight_id, nine_id)
        VALUES (
            (SELECT id from character_spell_slot_data_query_one),
            (SELECT id from character_spell_slot_data_query_two),
            (SELECT id from character_spell_slot_data_query_three),
            (SELECT id from character_spell_slot_data_query_four),
            (SELECT id from character_spell_slot_data_query_five),
            (SELECT id from character_spell_slot_data_query_six),
            (SELECT id from character_spell_slot_data_query_seven),
            (SELECT id from character_spell_slot_data_query_eight),
            (SELECT id from character_spell_slot_data_query_nine)
        )
    RETURNING id
), character_treasure_money_query as (  --will insert items later
    INSERT INTO character_treasure_money (gold, silver, electrum, copper)
        VALUES (33, 0, 0, 0)
    RETURNING id
), character_treasure_query as (
    INSERT INTO character_treasure (money_id)
        VALUES ((SELECT id from character_treasure_money_query))
    RETURNING id
), character_data_query as (
    INSERT INTO character_data (
        user_name,
        character_name,
        level,
        class,
        background,
        race,
        spellcasting_ability,
        experience,
        proficiency_bonus,
        inspiration,
        armor_class,
        initiative,
        speed,
        max_hp,
        temp_hp,
        current_hp,
        skill_proficiencies,
        saving_throw_proficiencies,
        general_proficiencies,
        known_languages,
        prepared_spells,
        character_ability_scores_id,
        character_death_save_id,
        character_known_spells_id,
        character_spell_slots_id,
        character_treasure_id,
        character_sheet_settings_id
    )
        VALUES (
            'elchung',
            'Binky',
            4,
            'Wizard',
            'Haunted One',
            'Human (Variant)',
            'Intelligence',
            2700,
            2,
            0,
            12,
            7,
            30,
            18,  --max_hp
            0,  --temp_hp
            0,  --current_hp
            '{Arcana, Investigation, Medicine, Religion}',  --skill_proficiencies
            '{Intelligence, Wisdom}',  --saving_throw_proficiencies
            '{Dagger, Dart, Light Crossbow, Quarterstaff, Sling}',  --general_proficiencies
            '{Elvish, Gnome, Halfing, Draconic}', --known_languages
            '{Charm Person, Fog Cloud, Magic Missile, Shield, Invisibiity, Web}',  --prepared_spells
            (SELECT id from character_ability_scores_query),  --character_ability_scores_id
            (SELECT id from character_death_saves_query), --character_death_save_id
            (SELECT id from character_known_spells_query), --character_known_spells_id
            (SELECT id from character_spell_slots_query), --character_spell_slots_id
            (SELECT id from character_treasure_query), --character_treasure_id
            (SELECT id from character_sheet_settings_query) --character_sheet_settings_id
        )
    RETURNING character_id
), character_features_and_traits_description_query as (
    INSERT INTO character_features_and_traits_description (title, body)
        VALUES ('Alert', 'You can''t be surprised while conscious. You have a +5 bonus to initiative rolls. Other creatures also don''t gain advantage on attack rolls against you as a result of being hidden from you.')
    RETURNING id
), character_features_and_traits_query as (
  INSERT INTO character_features_and_traits (character_id, character_features_and_traits_description_id)
      VALUES (
          (SELECT character_id from character_data_query),
          (SELECT id from character_features_and_traits_description_query)
      )
)
INSERT INTO character_hit_dice (num_dice, dice_type, num_used, character_id)
    VALUES (4, 6, 0, (SELECT character_id from character_data_query));
