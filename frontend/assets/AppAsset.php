<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'js/a_data/css.css',
        'js/a_data/css_002.css',
        'css/custom_style.css'
    ];
    public $js = [
        'js/cloudflareapp1.js',
        'js/cloudflareapp2.js',
        'js/script.js',
        'js/a_data/wp-emoji-release.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
