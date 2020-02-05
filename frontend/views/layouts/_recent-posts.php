<?php
$posts = \backend\models\Post::find()->orderBy('id desc')->limit(2)->all();
?>
<div class="elementor-widget-wrap">
    <div class="elementor-element elementor-element-ffb26a4 elementor-widget elementor-widget-heading"
         data-id="ffb26a4" data-element_type="widget"
         data-widget_type="heading.default">
        <div class="elementor-widget-container"><p
                class="elementor-heading-title elementor-size-default">RECENT
                POSTS</p></div>
    </div>
    <div class="elementor-element elementor-element-503fb218 elementor-widget elementor-widget-jet-posts"
         data-id="503fb218" data-element_type="widget"
         data-widget_type="jet-posts.default">
        <div class="elementor-widget-container">
            <div class="elementor-jet-posts jet-elements">
                <div class="jet-posts col-row disable-cols-gap disable-rows-gap">
                    <?php foreach ($posts as $post) {?>
                    <div class="jet-posts__item col-desk-1">
                        <div class="jet-posts__inner-box">
                            <div class="jet-posts__inner-content"><h4
                                    class="entry-title"><a
                                        href=""><?=$post->title ?></a></h4>
                                <div class="post-meta"><span
                                        class="post__date post-meta__item"><a
                                            href=""
                                            class="post__date-link"><time
                                                datetime="<?=$post->created_at ?>"
                                                title="<?=$post->created_at ?>"><?=Yii::$app->formatter->asDate($post->created_at, 'long') ?></time></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>
