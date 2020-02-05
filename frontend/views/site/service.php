<?php
/* @var $model backend\models\Service */

$this->title = $model->title;
$this->params['breadcrumbs'][] = $this->title;
?>
<div id="content" class="site-content">
    <article id="post-650" class="post-650 page type-page status-publish hentry">
        <div data-elementor-type="wp-page" data-elementor-id="650" class="elementor elementor-650" data-elementor-settings="[]">
            <div class="elementor-inner">
                <div class="elementor-section-wrap">
                    <section class="elementor-element elementor-element-2b2e3a3 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="2b2e3a3" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                                <div class="elementor-element elementor-element-23d3924 elementor-column elementor-col-50 elementor-top-column" data-id="23d3924" data-element_type="column">
                                    <div class="elementor-column-wrap  elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-fda5b50 elementor-widget elementor-widget-image" data-id="fda5b50" data-element_type="widget" data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-image">
                                                        <img src="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460.jpg" data-lazy-type="image" data-src="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460.jpg" class="attachment-full size-full lazy-loaded" alt="" srcset="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460.jpg 700w, https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460-300x197.jpg 300w, https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460-600x394.jpg 600w" data-srcset="" sizes="(max-width: 700px) 100vw, 700px" width="700" height="460">
                                                        <noscript>
                                                            <img width="700" height="460" src="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460.jpg" class="attachment-full size-full" alt="" srcset="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460.jpg 700w, https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460-300x197.jpg 300w, https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/09/img_8-700x460-600x394.jpg 600w" sizes="(max-width: 700px) 100vw, 700px" />
                                                        </noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-954a305 elementor-column elementor-col-50 elementor-top-column" data-id="954a305" data-element_type="column">
                                    <div class="elementor-column-wrap  elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-c1e66af elementor-widget elementor-widget-text-editor" data-id="c1e66af" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">
                                                        <p><strong>Client: </strong><?=$model->client ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-21796f3 elementor-widget elementor-widget-text-editor" data-id="21796f3" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">
                                                        <p><strong>Date: </strong><?=date('d/m/Y', strtotime($model->created_at)) ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-8ae806f elementor-widget elementor-widget-text-editor" data-id="8ae806f" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container"><div class="elementor-text-editor elementor-clearfix">
                                                        <p><strong>Info: </strong><?=$model->info ?></p>
                                                    </div></div>
                                            </div>
                                            <div class="elementor-element elementor-element-33afddb elementor-widget elementor-widget-text-editor" data-id="33afddb" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">Launch Project</div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-67f9a61 elementor-widget elementor-widget-text-editor" data-id="67f9a61" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix">
                                                        <?=$model->content ?>
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
