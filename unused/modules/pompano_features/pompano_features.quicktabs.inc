<?php
/**
 * @file
 * pompano_features.quicktabs.inc
 */

/**
 * Implements hook_quicktabs_default_quicktabs().
 */
function pompano_features_quicktabs_default_quicktabs() {
  $export = array();

  $quicktabs = new stdClass();
  $quicktabs->disabled = FALSE; /* Edit this to true to make a default quicktabs disabled initially */
  $quicktabs->api_version = 1;
  $quicktabs->machine_name = 'quicktabs';
  $quicktabs->ajax = 0;
  $quicktabs->hide_empty_tabs = FALSE;
  $quicktabs->default_tab = 0;
  $quicktabs->title = 'Quicktabs';
  $quicktabs->tabs = array(
    0 => array(
      'bid' => 'block_delta_2',
      'hide_title' => 1,
      'title' => 'Tab One',
      'weight' => '-100',
      'type' => 'block',
    ),
    1 => array(
      'bid' => 'block_delta_1',
      'hide_title' => 1,
      'title' => 'Tab Two',
      'weight' => '-99',
      'type' => 'block',
    ),
  );
  $quicktabs->renderer = 'quicktabs';
  $quicktabs->style = 'nostyle';
  $quicktabs->options = array();

  // Translatables
  // Included for use with string extractors like potx.
  t('Quicktabs');
  t('Tab One');
  t('Tab Two');

  $export['quicktabs'] = $quicktabs;

  return $export;
}
