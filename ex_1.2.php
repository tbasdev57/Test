<?php

function parse_filter($filter_json)
{
    $filter = json_decode($filter_json, true);
    if (!$filter || !isset($filter['rules']) || !isset($filter['condition'])) {
        return 'Invalid filter format';
    }
    return parse_rules($filter['rules'], $filter['condition']);
}

function parse_rules($rules, $condition)
{
    $parsed_rules = [];
    foreach ($rules as $rule) {
        if (isset($rule['rules'])) {
            $parsed_rules[] = '(' . parse_rules($rule['rules'], $rule['condition']) . ')';
        } else {
            $parsed_rules[] = $rule['id'] . ' ' . $rule['operator'] . ' ' . $rule['value'];
        }
    }
    return implode(' ' . $condition . ' ', $parsed_rules);
}

echo parse_filter(file_get_contents('exemple-1.json'));
echo PHP_EOL;
echo parse_filter(file_get_contents('exemple-2.json'));