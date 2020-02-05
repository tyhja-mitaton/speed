<?php
$categories = \backend\models\Category::find()->all();
?>
<aside id="categories-2" class="widget widget_categories">
    <h4 class="widget-title">Categories</h4>
    <ul>
        <?php foreach ($categories as $category) {?>
            <li class="cat-item cat-item-<?=$category->id ?>"><a href=""><?=$category->title ?></a></li>
        <?php } ?>
    </ul>
</aside>
