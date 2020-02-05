<?php
/* @var $model backend\models\Post */

$this->title = $model->title;
$this->params['breadcrumbs'][] = $this->title;
?>
<div id="content" class="site-content">
<div class="site-content__wrap container">
<div class="row">
    <div id="primary" class="col-xs-12 col-md-8">
        <main id="main" class="site-main">
<article id="post-<?=$model->id ?>"class="posts-list__item default-item post type-post status-publish format-standard has-post-thumbnail hentry category-morbi-ac-porttitor-neque">
    <header class="entry-header">
        <h1 class="entry-title h2-style"><?=$model->title?></h1>
        <div class="entry-meta">
            <?php $user = $model->getUser()->one();
            $category = $model->getCategory()->one()?>
            <span class="byline">By <a href=""><?=$user->username ?></a></span>
            <span class="cat-links"><a href=""><?=$category->title ?></a></span>
            <span class="posted-on"><time datetime="<?=$model->created_at ?>"><?=Yii::$app->formatter->asDate($model->created_at, 'long') ?></time></span>
            <a class="comments-link" href="">0 Comment(s)</a>
        </div>
    </header>
    <figure class="post-thumbnail">
        <a class="post-thumbnail__link" href="" aria-hidden="true">
            <img src="" data-lazy-type="image" data-src="" class="attachment-kava-thumb-l size-kava-thumb-l wp-post-image lazy-loaded" alt="work" width="1024" height="650">
            <noscript><img width="1024" height="650" src="" class="attachment-kava-thumb-l size-kava-thumb-l wp-post-image" alt="work" /></noscript>
        </a>
    </figure>
    <div class="entry-content"><p><?=$model->content ?></p></div>
    <footer class="entry-footer">
        <div class="entry-meta"></div>
    </footer>
</article>
        </main>
    </div>
    <aside id="secondary" class="col-xs-12 col-md-4 widget-area">
        <?=$this->render('_recent-comments') ?>
        <?=$this->render('_categories') ?>
    </aside>
</div>
</div>
</div>