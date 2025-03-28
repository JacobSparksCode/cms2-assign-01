 <?php
 /**
  * Enqueue block editor assets
  */
 function cms2_test_01_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'cms2-test-01-block-editor',
        get_theme_file_uri( 'assets/js/block-editor.js' ),
        array(
            'wp-blocks',
            'wp-dom-ready', 
            'wp-edit-post'
        )
    );
}
add_action( 'enqueue_block_editor_assets', 'cms2_test_01_enqueue_block_editor_assets' );
/**
*Enqueue block-assets.
*/
function cms2_test_01_enqueue_block_assets() {
    wp_enqueue_style(
        'cms2-test-01-block-styles',
        get_theme_file_uri( 'assets/css/blocks-styles.css' ),
    );
}
add_action( 'enqueue_block_assets', 'cms2_test_01_enqueue_block_assets' );

/**
* Enqueue front-end assets
*/
function cms2_test_01_enqueue_assets() {
    // if (is_woocommerce() )
    wp_enqueue_style(
        'cms2-test-01-styles'
        get_theme_file_uri( 'assets/css/woocommerce.css'),
    );
}
add_action( 'wp_enqueue_scripts', 'cms2_test_01_enqueue_assets' );