<?php get_header(); ?>

<div class="product-archive">
    <h1>Our Products</h1>
    <div class="products-list">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
        ?>
            <div class="product-item">
                <a href="<?php the_permalink(); ?>">
                    <div class="product-thumbnail">
                        <?php the_post_thumbnail('medium'); ?>
                    </div>
                    <h2><?php the_title(); ?></h2>
                </a>
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
    </div>
</div>

<?php get_footer(); ?>
