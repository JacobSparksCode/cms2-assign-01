<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package advanced-theme
 * @since 1.0.0
 */

/**
 * The theme version.
 *
 * @since 1.0.0
 */
define( 'ADVANCED_THEME_VERSION', wp_get_theme()->get( 'Version' ) );

/**
 * Add theme support for block styles and editor style.
 *
 * @since 1.0.0
 *
 * @return void
 */
function advanced_theme_setup() {
	add_editor_style( './assets/css/style-shared.min.css' );

	/*
	 * Load additional block styles.
	 * See details on how to add more styles in the readme.txt.
	 */
	$styled_blocks = [ 'button', 'quote', 'navigation', 'search' ];
	foreach ( $styled_blocks as $block_name ) {
		$args = array(
			'handle' => "advanced-theme-$block_name",
			'src'    => get_theme_file_uri( "assets/css/blocks/$block_name.min.css" ),
			'path'   => get_theme_file_path( "assets/css/blocks/$block_name.min.css" ),
		);
		// Replace the "core" prefix if you are styling blocks from plugins.
		wp_enqueue_block_style( "core/$block_name", $args );
	}

}
add_action( 'after_setup_theme', 'advanced_theme_setup' );

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function advanced_theme_styles() {
	wp_enqueue_style(
		'advanced-theme-style',
		get_stylesheet_uri(),
		[],
		ADVANCED_THEME_VERSION
	);
	wp_enqueue_style(
		'advanced-theme-shared-styles',
		get_theme_file_uri( 'assets/css/style-shared.min.css' ),
		[],
		ADVANCED_THEME_VERSION
	);
}
add_action( 'wp_enqueue_scripts', 'advanced_theme_styles' );

// Filters.
require_once get_theme_file_path( 'inc/filters.php' );

// Block variation example.
require_once get_theme_file_path( 'inc/register-block-variations.php' );

// Block style examples.
require_once get_theme_file_path( 'inc/register-block-styles.php' );

// Block pattern and block category examples.
require_once get_theme_file_path( 'inc/register-block-patterns.php' );

//* create post type for product showcases
function create_product_post_type() {
    $args = array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new' => 'Add New Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
            'new_item' => 'New Product',
            'view_item' => 'View Product',
            'search_items' => 'Search Products',
            'not_found' => 'No products found',
            'not_found_in_trash' => 'No products found in Trash',
            'all_items' => 'All Products',
            'menu_name' => 'Products',
            'name_admin_bar' => 'Product',
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array( 'slug' => 'products' ),
        'show_in_rest' => true, // Enable Gutenberg editor
        'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields' ), // Add support for title, editor, and featured image
        'menu_icon' => 'dashicons-cart', // Optional: Dashicon for your product post type
    );

    register_post_type( 'product', $args );
}

add_action( 'init', 'create_product_post_type' );
?>