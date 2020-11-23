select
    json_build_object(
            'spell_slots', json_build_object(
                    'id', spell_slots.id,
                    'one', json_build_object(
                            'id', spell_slot_data_one.id,
                            'max', spell_slot_data_one.max,
                            'used', spell_slot_data_one.used
                        ),
                    'two', json_build_object(
                            'id', spell_slot_data_two.id,
                            'max', spell_slot_data_two.max,
                            'used', spell_slot_data_two.used
                        ),
                )
        )
from character_data cd
    inner join character_spell_slots spell_slots on spell_slots.id = cd.character_spell_slots_id
    inner join character_spell_slot_data spell_slot_data_one on spell_slot_data_one.id = spell_slots.one_id and spell_slots.id = cd.character_spell_slots_id
    inner join character_spell_slot_data spell_slot_data_two on spell_slot_data_two.id = spell_slots.two_id and spell_slots.id = cd.character_spell_slots_id
WHERE cd.character_id = 1;
