<?php

//Hooks
require_once get_theme_file_path('inc/hooks.php');

//woocommerence
require_once get_theme_file_path('inc/woocommerence.php');

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