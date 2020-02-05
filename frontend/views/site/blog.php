<?php

/* @var $dataProvider yii\data\ActiveDataProvider */

use yii\helpers\Url;

$this->title = 'Blog';
$this->params['breadcrumbs'][] = $this->title;
?>
<div id="content" class="site-content">
<div class="site-content__wrap container">
    <div class="row">
        <div id="primary" class="col-xs-12 col-md-8">
            <main id="main" class="site-main">
                <header><h1 class="page-title screen-reader-text"><?=$this->title ?></h1></header>
                <div class="posts-list posts-list--default list-style-default">
        <?php
        foreach ($dataProvider->models as $model) { ?>
            <article id="post-<?=$model->id ?>"class="posts-list__item default-item post type-post status-publish format-standard has-post-thumbnail hentry category-morbi-ac-porttitor-neque">
                <header class="entry-header">
                    <h3 class="entry-title">
                        <a href="" rel="bookmark"><?=$model->title?></a>
                    </h3>
                    <div class="entry-meta">
                        <?php $user = $model->getUser()->one();
                        $category = $model->getCategory()->one()?>
                        <span class="byline">By <a href=""><?=$user->username ?></a></span>
                        <span class="cat-links"><a href=""><?=$category->title ?></a></span>
                        <span class="posted-on"><time datetime="<?=$model->created_at ?>"><?=Yii::$app->formatter->asDate($model->created_at, 'long') ?></time></span>
                    </div>
                </header>
                <figure class="post-thumbnail">
                    <a class="post-thumbnail__link" href="" aria-hidden="true">
                        <img src="" data-lazy-type="image" data-src="" class="attachment-kava-thumb-l size-kava-thumb-l wp-post-image lazy-loaded" alt="work" width="1024" height="650">
                        <noscript><img width="1024" height="650" src="" class="attachment-kava-thumb-l size-kava-thumb-l wp-post-image" alt="work" /></noscript>
                    </a>
                </figure>
                <div class="entry-content"><p><?=\yii\helpers\StringHelper::truncate($model->content, 380, '...') ?></p></div>
                <footer class="entry-footer">
                    <div class="entry-meta"><div>
                            <a href="" class="comments-button"><i class="fa fa-comment" aria-hidden="true"></i> 0</a>
                            <a href="<?=Url::toRoute(['site/post', 'id' => $model->id]); ?>" class="btn ">More</a>
                        </div></div>
                </footer>
            </article>
        <?php }
        ?>
                </div>
            </main>
        </div>
        <aside id="secondary" class="col-xs-12 col-md-4 widget-area">
            <?=$this->render('_recent-comments') ?>
            <?=$this->render('_categories') ?>
        </aside>
    </div>
</div>
</div>
