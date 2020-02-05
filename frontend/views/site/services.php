<?php
/* @var $dataProvider yii\data\ActiveDataProvider */

use yii\helpers\Url;

/* @var $dataServiceProvider yii\data\ActiveDataProvider */

$this->title = 'Services';
$this->params['breadcrumbs'][] = $this->title;
?>
<div id="content" class="site-content">
<article id="post-12" class="post-12 page type-page status-publish hentry">
    <div data-elementor-type="wp-post" data-elementor-id="12" class="elementor elementor-12" data-elementor-settings="[]">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">
                <section class="elementor-element elementor-element-a776832 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="a776832" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-no">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-c248dab elementor-column elementor-col-100 elementor-top-column" data-id="c248dab" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-f974612 elementor-widget elementor-widget-jet-portfolio" data-id="f974612" data-element_type="widget" data-widget_type="jet-portfolio.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-jet-portfolio jet-elements">
                                                    <div class="jet-portfolio layout-type-grid preset-type-2 layout-desktop-column-3 layout-tablet-column-2 layout-mobile-column-1" data-settings="{&quot;layoutType&quot;:&quot;grid&quot;,&quot;columns&quot;:3,&quot;columnsTablet&quot;:&quot;2&quot;,&quot;columnsMobile&quot;:&quot;1&quot;,&quot;perPage&quot;:9}">
                                                        <div class="jet-portfolio__filter">
                                                            <div class="jet-portfolio__filter-list">
                                                                <div class="jet-portfolio__filter-item active" data-slug="all">
                                                                    <span>SHOW ALL</span>
                                                                </div>
                                                                <?php foreach ($dataProvider->models as $model) {?>
                                                                    <div class="jet-portfolio__filter-item" data-slug="category-<?=$model->id ?>">
                                                                        <span><?=$model->title ?></span>
                                                                    </div>
                                                                <?php }?>
                                                            </div>
                                                        </div>
                                                        <div class="jet-portfolio__list" style="position: relative; height: 1557px;">
                                                            <?php $top = 0; $index = 0; $is_first = false;
                                                            foreach ($dataServiceProvider->models as $service) {
                                                                $index++; if ($index % 3 != 0) {$is_first = !$is_first;}
                                                                $left = $index % 3 == 0 ? 66.63 : (!$is_first ? 33.27 : 0);
                                                                ?>
                                                            <article class="jet-portfolio__item visible-status item-loaded" data-slug="{&quot;0&quot;:&quot;all&quot;,&quot;<?=$service->category_id ?>&quot;:&quot;<?=$service->getCategory()->one()->title ?>&quot;,&quot;2&quot;:&quot;category-3&quot;}" style="position: absolute; left: <?=$left ?>%; top: <?=$top ?>px;">
                                                                <div class="jet-portfolio__inner" style="opacity: 1; transform: scale(1);">
                                                                    <a class="jet-portfolio__link " href="" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="f974612">
                                                                        <div class="jet-portfolio__image">
                                                                            <img class="jet-portfolio__image-instance lazy-loaded" src="" data-lazy-type="image" data-src="" alt="work" width="1024" height="610">
                                                                            <noscript><img class="jet-portfolio__image-instance" src="" width="1024" height="610"  alt="work"></noscript>
                                                                            <div class="jet-portfolio__cover"><i class="fa fa-arrows-alt"></i></div>
                                                                        </div>
                                                                    </a>
                                                                    <div class="jet-portfolio__content">
                                                                        <div class="jet-portfolio__content-inner">
                                                                            <h6 class="jet-portfolio__title"><?=$service->title ?></h6>
                                                                            <h6 class="jet-portfolio__category"></h6>
                                                                            <p class="jet-portfolio__desc"><?=\yii\helpers\StringHelper::truncate($service->content, 112, '...') ?></p>
                                                                            <a class="elementor-button elementor-size-md jet-portfolio__button" href="<?=Url::toRoute(['site/service', 'id' => $service->id]); ?>">
                                                                                <span class="jet-portfolio__button-text">Read more</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                            <?php if ($index % 3 == 0) {
                                                                    $top += 519;
                                                                }
                                                            }?>
                                                        </div>
                                                        <div class="jet-portfolio__view-more">
                                                            <div class="elementor-button elementor-size-md jet-portfolio__view-more-button">View More</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</article>
</div>
