<?php get_header(); ?>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

    <div class="product">
        <h1><?php the_title(); ?></h1>
        <div class="product-thumbnail">
            <?php the_post_thumbnail(); ?>
        </div>
        <div class="product-description">
            <?php the_content(); ?>
        </div>
        <div class="product-price">
            <?php
                $price = get_post_meta( get_the_ID(), '_product_price', true );
                if ( $price ) {
                    echo '<p>Price: $' . esc_html($price) . '</p>';
                }
            ?>
        </div>
    </div>

<?php
    endwhile;
endif;
?>

<?php get_footer(); ?>
