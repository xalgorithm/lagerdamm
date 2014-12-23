<div id="page" class="clearfix">

  <div class="header-wrapper <?php if ($fixed_header): ?>fixed<?php endif; ?>"><div class="header-wrapper-inner <?php echo $grid_size ?>">
    <header class="<?php echo $grid_full_width ?> clearfix">

      <?php if ($logo): ?>
        <div class="site-logo">
          <a href="<?php print check_url($front_page); ?>"><img src="<?php print $logo ?>" alt="<?php print $site_name; ?>" /></a>
        </div>
      <?php endif; ?>

      <hgroup>

        <?php if ($site_name): ?>
            <?php if ($is_front) { ?>
              <h1 class="site-name"><a href="<?php print check_url($front_page); ?>"><?php print $site_name; ?></a></h1>
            <?php } else { ?>
              <h2 class="site-name"><a href="<?php print check_url($front_page); ?>"><?php print $site_name; ?></a></h2>
            <?php } ?>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
            <h3 class="site-slogan"><?php print $site_slogan; ?></h3>
        <?php endif; ?>

      </hgroup>

	  <?php if ($page['main_menu'] || $page['user_menu']): ?>
        <nav id="main-menu" class="clearfix">
          <?php print render($page['main_menu']); ?>
          <?php print render($page['user_menu']); ?>
        </nav>
      <?php endif; ?>
<?php print render($page['search_box']); ?>
    </header>
  </div></div>

  <div class="social-wrapper"><div class="social-wrapper-inner <?php echo $grid_size ?>"><div class="<?php echo $grid_full_width ?>">


<!--
    <section class="social">

      <ul>
        <?php if ($facebook): ?><li><a class="facebook" href="<?php print $facebook ?>"></a></li><?php endif; ?>
        <?php if ($twitter): ?><li><a class="twitter" href="<?php print $twitter ?>"></a></li><?php endif; ?>
        <?php if ($google): ?><li><a class="google" href="<?php print $google ?>"></a></li><?php endif; ?>
        <?php if ($linkedin): ?><li><a class="linkedin" href="<?php print $linkedin ?>"></a></li><?php endif; ?>
        <?php if ($youtube): ?><li><a class="youtube" href="<?php print $youtube ?>"></a></li><?php endif; ?>
        <?php if ($flickr): ?><li><a class="flickr" href="<?php print $flickr ?>"></a></li><?php endif; ?>
        <?php if ($instagram): ?><li><a class="instagram" href="<?php print $instagram ?>"></a></li><?php endif; ?>
        <li><a class="rss" href="<?php print $base_path ?>rss.xml"></a></li>
      </ul>

    </section>
-->
  </div></div></div>

  <?php if ($page['preface_1'] || $page['preface_2'] || $page['preface_3'] || $page['preface_4']): ?>
    <div class="preface-wrapper"><div class="preface-wrapper-inner"><div class="preface-wrapper-inner-inner  <?php echo $grid_size ?>">
      <section id="preface" class="clearfix">
        <div class="<?php echo $preface_1_grid_width ?>"><?php print render($page['preface_1']); ?></div>
        <div class="<?php echo $preface_2_grid_width ?>"><?php print render($page['preface_2']); ?></div>
        <div class="<?php echo $preface_3_grid_width ?>"><?php print render($page['preface_3']); ?></div>
        <div class="<?php echo $preface_4_grid_width ?>"><?php print render($page['preface_4']); ?></div>
      </section>
    </div></div></div>
  <?php endif; ?>

<!-- Main Content -->
  <div class="main-content-wrapper"><div class="main-content-wrapper-inner <?php echo $grid_size ?>">

    <?php if ($breadcrumb && $breadcrumbs): ?><nav class="<?php echo $grid_full_width ?>"><?php print $breadcrumb; ?></nav> <?php endif; ?>

    <section id="main-content" class="clearfix">

      <?php if ($page['sidebar_first']): ?>
      <aside class="sidebar first-sidebar <?php print $sidebar_first_grid_width ?>">
          <?php print render($page['sidebar_first']); ?>
      </aside>
      <?php endif; ?>

      <div class="main">
        <div class="main-inner  <?php print $main_content_grid_width ?>"><div class="main-inner-inner <?php if (!isset($node)): ?>non-node<?php endif; ?>"><div class="main-inner-inner-inner">

          <?php print $messages ?>

		  <?php if ($page['slideshow']): ?>
            <div class="slideshow-wrapper"><div class="slideshow-wrapper-inner">
              <section class="slideshow">
                <?php print render($page['slideshow']); ?>
              </section>
            </div></div>
          <?php endif; ?>

          <?php if ($page['content_top']): ?><div class="content-top"><?php print render($page['content_top']); ?></div><?php endif; ?>
          <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
          <?php print render($tabs); ?>
          <?php if (!isset($node)): ?>
            <?php print render($title_prefix); ?>
              <?php if ($title): ?><h1 class="title" id="page-title"><span><?php print $title; ?></span></h1><?php endif; ?>
            <?php print render($title_suffix); ?>
          <?php endif; ?>
          <?php print render($page['content']); ?>
          <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
          <?php if ($page['content_bottom']): ?><div class="content-bottom"><?php print render($page['content_bottom']); ?></div><?php endif; ?>
        </div></div></div>
        <?php if ($page['sidebar_second']): ?>
        <aside class="sidebar second-sidebar <?php print $sidebar_second_grid_width ?> clearfix">
            <?php print render($page['sidebar_second']); ?>
        </aside>
        <?php endif; ?>
      </div>

    </section>
  </div></div>

  <div class="postscript-wrapper"><div class="postscript-wrapper-inner"><div class="postscript-wrapper-inner-inner <?php echo $grid_size ?>">
    <section id="postscript" class="clearfix">
      <div class="<?php echo $postscript_1_grid_width ?>"><?php print render($page['postscript_1']); ?></div>
      <div class="<?php echo $postscript_2_grid_width ?>"><?php print render($page['postscript_2']); ?></div>
      <div class="<?php echo $postscript_3_grid_width ?>"><?php print render($page['postscript_3']); ?></div>
      <div class="<?php echo $postscript_4_grid_width ?>"><?php print render($page['postscript_4']); ?></div>
    </section>
  </div></div></div>

<!-- All Hail the Footer -->
  <div class="footer-wrapper"><div class="footer-wrapper-inner <?php echo $grid_size ?>">
    <footer id="footer" class="<?php echo $grid_full_width ?> clearfix">
      <?php print render($page['footer']) ?>

    </footer><!-- /footer -->
  </div></div>

</div><!-- page -->
