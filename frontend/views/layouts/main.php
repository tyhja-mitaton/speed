<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,follow">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/">
    <link rel="dns-prefetch" href="https://s.w.org/">
    <link rel="alternate" type="application/rss+xml" title="Speed » Feed"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/feed/">
    <link rel="alternate" type="application/rss+xml" title="Speed » Comments Feed"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/comments/feed/">
    <script src="https://kit.fontawesome.com/fb68825154.js" crossorigin="anonymous"></script>
    <script type="text/javascript">window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
            "ext": ".png",
            "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
            "svgExt": ".svg",
            "source": {"concatemoji": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.3"}
        };
        !function (a, b, c) {
            function d(a, b) {
                var c = String.fromCharCode;
                l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0);
                var d = k.toDataURL();
                l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0);
                var e = k.toDataURL();
                return d === e
            }

            function e(a) {
                var b;
                if (!l || !l.fillText) return !1;
                switch (l.textBaseline = "top", l.font = "600 32px Arial", a) {
                    case"flag":
                        return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b);
                    case"emoji":
                        return b = d([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340]), !b
                }
                return !1
            }

            function f(a) {
                var c = b.createElement("script");
                c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
            }

            var g, h, i, j, k = b.createElement("canvas"), l = k.getContext && k.getContext("2d");
            for (j = Array("flag", "emoji"), c.supports = {
                everything: !0,
                everythingExceptFlag: !0
            }, i = 0; i < j.length; i++) c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
            c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () {
                c.DOMReady = !0
            }, c.supports.everything || (h = function () {
                c.readyCallback()
            }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function () {
                "complete" === b.readyState && c.readyCallback()
            })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)))
        }(window, document, window._wpemojiSettings);</script>
    <link rel="stylesheet"
          href="data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gewogIGRpc3BsYXk6IGJsb2NrOwogIGJhY2tncm91bmQ6ICM0NTQ4NGQ7CiAgY29sb3I6ICNmZmY7CiAgbGluZS1oZWlnaHQ6IDEuNDU7CiAgcG9zaXRpb246IGZpeGVkOwogIHotaW5kZXg6IDkwMDAwMDAwOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIHBhZGRpbmc6IC41ZW0gMWVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXVtkYXRhLXZpc2liaWxpdHk9ImhpZGRlbiJdIHsKICBkaXNwbGF5OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1tZXNzYWdlIHsKICBkaXNwbGF5OiBibG9jazsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gYSB7CiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CiAgY29sb3I6ICNlYmViZjQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6aG92ZXIsCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6YWN0aXZlIHsKICBjb2xvcjogI2RiZGJlYjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtY2xvc2UgewogIGRpc3BsYXk6IGJsb2NrOwogIGN1cnNvcjogcG9pbnRlcjsKICBmb250LXNpemU6IDEuNWVtOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICByaWdodDogLjRlbTsKICB0b3A6IC4zNWVtOwogIGhlaWdodDogMWVtOwogIHdpZHRoOiAxZW07CiAgbGluZS1oZWlnaHQ6IDE7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmFjdGl2ZSB7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1jbG9zZTpob3ZlciB7CiAgb3BhY2l0eTogLjllbTsKICBjb2xvcjogI2ZmZjsKfQo=">
    <meta name="msapplication-TileImage"
          content="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/04/favicon.ico">
    <style id="elementor-frontend-inline-css"
           type="text/css">.elementor-8 .elementor-element.elementor-element-6312808 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-6312808 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .slider-pro .jet-slider__content-inner {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons {
            max-width: 1200px;
            text-align: left;
            margin-top: -70px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-image-container:after {
            opacity: 0;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider {
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content-item {
            justify-content: center;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content {
            justify-content: center;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content-inner {
            padding: 0px 170px 0px 15px;
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__icon {
            justify-content: center;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__title {
            text-align: left;
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__subtitle {
            text-align: left;
            color: #3498db;
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 18px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__desc {
            text-align: left;
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 22px;
            letter-spacing: 0px;
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__button-wrapper {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__button--primary {
            padding: 20px 31px 20px 31px;
            margin: 45px 0px 0px 0px;
            background-color: #3498db;
            color: #ffffff;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__button--primary {
            font-family: "Open Sans", Sans-serif;
            font-size: 15px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__button--primary:hover {
            background-color: #ffffff;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-arrows .sp-arrow {
            border-radius: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons .sp-button {
            margin: 0px 14px 0px 0px;
            background-color: #3498db;
            width: 21px;
            height: 21px;
            border-style: solid;
            border-width: 0px 0px 0px 0px;
            border-radius: 50% 50% 50% 50%;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons .sp-button:hover {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons .sp-button.sp-selected-button {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-thumbnail-container:hover:before {
            border-style: solid;
            border-width: 2px 2px 2px 2px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-thumbnail-container.sp-selected-thumbnail:before {
            border-style: solid;
            border-width: 2px 2px 2px 2px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3bb1233 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-5a5fda7 {
            margin-top: 0%;
            margin-bottom: 0%;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-9fc3256 > .elementor-container {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-324663f > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-324663f > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 30px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-stacked .elementor-icon {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-default .elementor-icon {
            fill: #ffffff;
            color: #ffffff;
            border-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-stacked .elementor-icon:hover {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-framed .elementor-icon:hover, .elementor-8 .elementor-element.elementor-element-063928c.elementor-view-default .elementor-icon:hover {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-position-right .elementor-icon-box-icon {
            margin-left: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-position-left .elementor-icon-box-icon {
            margin-right: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-wrapper {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-title {
            margin-bottom: 16px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-content .elementor-icon-box-title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 30px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 30px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-content .elementor-icon-box-description {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 13px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 0.5px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c > .elementor-widget-container {
            margin: 0px 0px 30px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063928c > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__instance {
            width: 204px;
            height: 56px;
            margin: 0px 0px 0px 0px;
            background-color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__container {
            justify-content: flex-start;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__instance:hover {
            background-color: #ffffff;
            border-style: solid;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-normal {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-hover {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__plane-normal {
            background-color: rgba(255, 255, 255, 0);
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__plane-hover {
            background-color: rgba(0, 0, 0, 0);
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-normal .jet-button__label {
            text-align: left;
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-hover .jet-button__label {
            text-align: left;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-normal .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__state-hover .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a2fef03 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-0bf2f27 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-0bf2f27 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 15px 0px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-stacked .elementor-icon {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-default .elementor-icon {
            fill: #ffffff;
            color: #ffffff;
            border-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-stacked .elementor-icon:hover {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-framed .elementor-icon:hover, .elementor-8 .elementor-element.elementor-element-063ca71.elementor-view-default .elementor-icon:hover {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-position-right .elementor-icon-box-icon {
            margin-left: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-position-left .elementor-icon-box-icon {
            margin-right: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-wrapper {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-title {
            margin-bottom: 16px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-content .elementor-icon-box-title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 30px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 30px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-content .elementor-icon-box-description {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 13px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 0.5px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 > .elementor-widget-container {
            margin: 0px 0px 30px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-063ca71 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__instance {
            width: 204px;
            height: 56px;
            margin: 0px 0px 0px 0px;
            background-color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__container {
            justify-content: flex-start;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__instance:hover {
            background-color: #ffffff;
            border-style: solid;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-normal {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-hover {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__plane-normal {
            background-color: rgba(255, 255, 255, 0);
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__plane-hover {
            background-color: rgba(0, 0, 0, 0);
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-normal .jet-button__label {
            text-align: left;
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-hover .jet-button__label {
            text-align: left;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-normal .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__state-hover .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a815ed4 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-aa98d41 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-aa98d41 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 30px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-stacked .elementor-icon {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-default .elementor-icon {
            fill: #ffffff;
            color: #ffffff;
            border-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-stacked .elementor-icon:hover {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-framed .elementor-icon:hover, .elementor-8 .elementor-element.elementor-element-7985605.elementor-view-default .elementor-icon:hover {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-position-right .elementor-icon-box-icon {
            margin-left: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-position-left .elementor-icon-box-icon {
            margin-right: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-wrapper {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-title {
            margin-bottom: 16px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-content .elementor-icon-box-title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 30px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 30px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-content .elementor-icon-box-description {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 13px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 0.5px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 > .elementor-widget-container {
            margin: 0px 0px 30px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7985605 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__instance {
            width: 204px;
            height: 56px;
            margin: 0px 0px 0px 0px;
            background-color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__container {
            justify-content: flex-start;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__instance:hover {
            background-color: #ffffff;
            border-style: solid;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-normal {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-hover {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__plane-normal {
            background-color: rgba(255, 255, 255, 0);
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__plane-hover {
            background-color: rgba(0, 0, 0, 0);
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-normal .jet-button__label {
            text-align: left;
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-hover .jet-button__label {
            text-align: left;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-normal .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__state-hover .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ab3a82c > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-9fc3256:not(.elementor-motion-effects-element-type-background), .elementor-8 .elementor-element.elementor-element-9fc3256 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: #3a424c;
        }

        .elementor-8 .elementor-element.elementor-element-9fc3256 {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 40px;
            margin-bottom: 0px;
            padding: 67px 15px 70px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-9fc3256 > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        .elementor-8 .elementor-element.elementor-element-f5b828b > .elementor-container {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-3d22036 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3d22036 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3dbf42b {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-3dbf42b.elementor-widget-heading .elementor-heading-title {
            color: #3e454c;
        }

        .elementor-8 .elementor-element.elementor-element-3dbf42b .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3dbf42b > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 35px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3dbf42b > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-3d17ce6 .elementor-text-editor {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-3d17ce6 {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3d17ce6 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 20px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3d17ce6 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-69fec41 .elementor-text-editor {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-69fec41 {
            color: #bababa;
            font-family: "Arial", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-69fec41 > .elementor-widget-container {
            margin: 0px 0px 62px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-69fec41 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__instance {
            width: 204px;
            height: 56px;
            margin: 0px 0px 0px 0px;
            background-color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__container {
            justify-content: flex-start;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__instance:hover {
            background-color: #ffffff;
            border-style: solid;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-normal {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-hover {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__plane-normal {
            background-color: rgba(255, 255, 255, 0);
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__plane-hover {
            background-color: rgba(0, 0, 0, 0);
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-normal .jet-button__label {
            text-align: left;
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-hover .jet-button__label {
            text-align: left;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-normal .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__state-hover .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1162b07 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-f5b828b {
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 119px 15px 70px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-24f69a4f > .elementor-container {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-715be848 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-715be848 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-29e0204 {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-29e0204.elementor-widget-heading .elementor-heading-title {
            color: #3e454c;
        }

        .elementor-8 .elementor-element.elementor-element-29e0204 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-29e0204 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 35px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-29e0204 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-ce9f517 .elementor-text-editor {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-ce9f517 {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ce9f517 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 20px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ce9f517 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-3b658aa2 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-3b658aa2 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6.elementor-view-stacked .elementor-icon {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-424dad6.elementor-view-default .elementor-icon {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6.elementor-position-right .elementor-icon-box-icon {
            margin-left: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6.elementor-position-left .elementor-icon-box-icon {
            margin-right: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 .elementor-icon-box-content .elementor-icon-box-title {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 25px;
            font-weight: 600;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 .elementor-icon-box-content .elementor-icon-box-description {
            color: #bababa;
            font-family: "Arial", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 > .elementor-widget-container {
            margin: 0px 38px 30px 0px;
            padding: 24px 30px 35px 23px;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-424dad6 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864.elementor-view-stacked .elementor-icon {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-9b62864.elementor-view-default .elementor-icon {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864.elementor-position-right .elementor-icon-box-icon {
            margin-left: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864.elementor-position-left .elementor-icon-box-icon {
            margin-right: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 .elementor-icon-box-content .elementor-icon-box-title {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 25px;
            font-weight: 600;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 .elementor-icon-box-content .elementor-icon-box-description {
            color: #bababa;
            font-family: "Arial", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 > .elementor-widget-container {
            margin: 0px 38px 30px 0px;
            padding: 24px 30px 35px 23px;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-9b62864 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-275724c4 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-275724c4 > .elementor-element-populated {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-view-stacked .elementor-icon {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-view-default .elementor-icon {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-position-right .elementor-icon-box-icon {
            margin-left: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-position-left .elementor-icon-box-icon {
            margin-right: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 .elementor-icon-box-content .elementor-icon-box-title {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 25px;
            font-weight: 600;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 .elementor-icon-box-content .elementor-icon-box-description {
            color: #bababa;
            font-family: "Arial", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 > .elementor-widget-container {
            margin: 0px 38px 30px 0px;
            padding: 24px 30px 35px 23px;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-4864bf3 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-view-stacked .elementor-icon {
            background-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-view-framed .elementor-icon, .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-view-default .elementor-icon {
            fill: #3498db;
            color: #3498db;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-position-right .elementor-icon-box-icon {
            margin-left: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-position-left .elementor-icon-box-icon {
            margin-right: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c.elementor-position-top .elementor-icon-box-icon {
            margin-bottom: 15px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c .elementor-icon {
            font-size: 60px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c .elementor-icon i {
            transform: rotate(0deg);
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c .elementor-icon-box-content .elementor-icon-box-title {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 25px;
            font-weight: 600;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c .elementor-icon-box-content .elementor-icon-box-description {
            color: #bababa;
            font-family: "Arial", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            font-style: normal;
            text-decoration: none;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c > .elementor-widget-container {
            margin: 0px 38px 30px 0px;
            padding: 24px 30px 35px 23px;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-2eef13c > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-a069bfc {
            margin-top: 43px;
            margin-bottom: 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-24f69a4f {
            padding: 70px 15px 70px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-ccce977 > .elementor-container {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-ef32ad6 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ef32ad6 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-5af84e5 {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-5af84e5.elementor-widget-heading .elementor-heading-title {
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-5af84e5 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-5af84e5 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 300px 18px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-5af84e5 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-a14af1b .elementor-text-editor {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-a14af1b {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 26px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a14af1b > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 23px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-a14af1b > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__instance {
            width: 204px;
            height: 56px;
            margin: 0px 0px 0px 0px;
            background-color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__container {
            justify-content: flex-start;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__instance:hover {
            background-color: #ffffff;
            border-style: solid;
            border-color: #3498db;
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-normal {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-hover {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__plane-normal {
            background-color: rgba(255, 255, 255, 0);
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__plane-hover {
            background-color: rgba(0, 0, 0, 0);
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-normal .jet-button__label {
            text-align: left;
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-hover .jet-button__label {
            text-align: left;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-normal .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__state-hover .jet-button__label {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-00d79f2 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-9bfd843 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-9bfd843 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-ccce977:not(.elementor-motion-effects-element-type-background), .elementor-8 .elementor-element.elementor-element-ccce977 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-image: url("https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/04/parallax_pic1.jpg");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .elementor-8 .elementor-element.elementor-element-ccce977 {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 169px 15px 133px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-ccce977 > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        .elementor-8 .elementor-element.elementor-element-7b2f154f > .elementor-container {
            max-width: 1200px;
        }

        .elementor-8 .elementor-element.elementor-element-724285f6 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-724285f6 > .elementor-element-populated {
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-f68986b {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-f68986b.elementor-widget-heading .elementor-heading-title {
            color: #3e454c;
        }

        .elementor-8 .elementor-element.elementor-element-f68986b .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 60px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 60px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-f68986b > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 35px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-f68986b > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-19c3490 .elementor-text-editor {
            text-align: left;
        }

        .elementor-8 .elementor-element.elementor-element-19c3490 {
            color: #3e454c;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-8 .elementor-element.elementor-element-19c3490 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 11px 0px 20px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-19c3490 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-8506df7 > .elementor-element-populated {
            margin: 0px 0px 20px 0px;
            padding: 0px 22px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table {
            background-color: #ffffff;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #dfdede;
            border-radius: 6px 6px 6px 6px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__heading {
            background-color: #3498db;
            padding: 7px 0px 26px 0px;
            text-align: center;
            border-radius: 6px 6px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1.4px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__icon {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price {
            background-color: #3498db;
            padding: 0px 0px 13px 0px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-prefix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-prefix {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 2.2em;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-val {
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-val {
            font-family: "Open Sans", Sans-serif;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.69em;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-suffix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__price-suffix {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 2.75em;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__features {
            background-color: #ffffff;
            padding: 14px 10px 18px 10px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-feature {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 2.125em;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-feature.item-included {
            color: #7e7d7d;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-feature.item-included .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-feature.item-excluded .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-feature.item-excluded .pricing-feature__text {
            text-decoration: none;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__action {
            background-color: #ffffff;
            padding: 0px 0px 21px 0px;
            border-radius: 0px 0px 6px 6px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__action .pricing-table-button {
            background-color: #3498db;
            padding: 21px 39px 21px 39px;
            border-radius: 5px 5px 5px 5px;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__action .pricing-table-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e .pricing-table__action .pricing-table-button:hover {
            background-color: #ffffff;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-2febaf8e > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-340080cf > .elementor-element-populated {
            padding: 0px 15px 0px 8px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table {
            background-color: #ffffff;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #dfdede;
            border-radius: 6px 6px 6px 6px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__heading {
            background-color: #3498db;
            padding: 7px 0px 26px 0px;
            text-align: center;
            border-radius: 6px 6px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1.4px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__icon {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price {
            background-color: #3498db;
            padding: 0px 0px 13px 0px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-prefix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-prefix {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 2.2em;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-val {
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-val {
            font-family: "Open Sans", Sans-serif;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.69em;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-suffix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__price-suffix {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 2.75em;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__features {
            background-color: #ffffff;
            padding: 14px 10px 18px 10px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-feature {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 2.125em;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-feature.item-included {
            color: #7e7d7d;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-feature.item-included .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-feature.item-excluded .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-feature.item-excluded .pricing-feature__text {
            text-decoration: none;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__action {
            background-color: #ffffff;
            padding: 0px 0px 21px 0px;
            border-radius: 0px 0px 6px 6px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__action .pricing-table-button {
            background-color: #3498db;
            padding: 21px 39px 21px 39px;
            border-radius: 5px 5px 5px 5px;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__action .pricing-table-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 .pricing-table__action .pricing-table-button:hover {
            background-color: #ffffff;
            color: #3498db;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
        }

        .elementor-8 .elementor-element.elementor-element-4475b599 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-202807ff > .elementor-element-populated {
            padding: 0px 7px 0px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table {
            background-color: transparent;
            background-image: linear-gradient(280deg, #42e8e0 0%, #5677d9 100%);
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #dfdede;
            border-radius: 6px 6px 6px 6px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__heading {
            background-color: #3498db;
            padding: 7px 0px 26px 0px;
            text-align: center;
            border-radius: 6px 6px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1.4px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__icon {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price {
            background-color: #3498db;
            padding: 0px 0px 13px 0px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-prefix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-prefix {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 2.2em;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-val {
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-val {
            font-family: "Open Sans", Sans-serif;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.69em;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-suffix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__price-suffix {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 2.75em;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__features {
            background-color: #ffffff;
            padding: 14px 10px 18px 10px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-feature {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 2.125em;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-feature.item-included {
            color: #7e7d7d;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-feature.item-included .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-feature.item-excluded .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-feature.item-excluded .pricing-feature__text {
            text-decoration: none;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__action {
            background-color: #ffffff;
            padding: 0px 0px 21px 0px;
            border-radius: 0px 0px 6px 6px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__action .pricing-table-button {
            background-color: #3498db;
            color: #ffffff;
            padding: 21px 39px 21px 39px;
            border-radius: 5px 5px 5px 5px;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__action .pricing-table-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 .pricing-table__action .pricing-table-button:hover {
            background-color: #ffffff;
            color: #3498db;
            border-style: solid;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-1408a816 > .elementor-widget-container {
            border-radius: 6px 6px 6px 6px;
        }

        .elementor-8 .elementor-element.elementor-element-4b929872 > .elementor-element-populated {
            padding: 0px 0px 0px 23px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table {
            background-color: #ffffff;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #dfdede;
            border-radius: 6px 6px 6px 6px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__heading {
            background-color: #3498db;
            padding: 7px 0px 26px 0px;
            text-align: center;
            border-radius: 6px 6px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__title {
            color: #ffffff;
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1.4px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__icon {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price {
            background-color: #3498db;
            padding: 0px 0px 13px 0px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-prefix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-prefix {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 2.2em;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-val {
            color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-val {
            font-family: "Open Sans", Sans-serif;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.69em;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-suffix {
            color: #ffffff;
            vertical-align: baseline;
            display: inline-block;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__price-suffix {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 2.75em;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__features {
            background-color: #ffffff;
            padding: 14px 10px 18px 10px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-feature {
            font-family: "Open Sans", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 2.125em;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-feature.item-included {
            color: #7e7d7d;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-feature.item-included .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-feature.item-excluded .item-bullet {
            font-size: 14px;
            width: 14px;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-feature.item-excluded .pricing-feature__text {
            text-decoration: none;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__action {
            background-color: #ffffff;
            padding: 0px 0px 21px 0px;
            border-radius: 0px 0px 6px 6px;
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__action .pricing-table-button {
            background-color: #3498db;
            padding: 21px 39px 21px 39px;
            border-radius: 5px 5px 5px 5px;
            border-style: solid;
            border-width: 2px 2px 2px 2px;
            border-color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__action .pricing-table-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 .pricing-table__action .pricing-table-button:hover {
            background-color: #ffffff;
            color: #3498db;
        }

        .elementor-8 .elementor-element.elementor-element-4d7e4db3 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-8 .elementor-element.elementor-element-6fbc33d6 {
            margin-top: 40px;
            margin-bottom: 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-8 .elementor-element.elementor-element-7b2f154f:not(.elementor-motion-effects-element-type-background), .elementor-8 .elementor-element.elementor-element-7b2f154f > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: #ffffff;
        }

        .elementor-8 .elementor-element.elementor-element-7b2f154f {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            padding: 87px 15px 80px 15px;
        }

        .elementor-8 .elementor-element.elementor-element-7b2f154f > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        @media (max-width: 1024px) {
            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content-item {
                justify-content: flex-start;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content {
                justify-content: center;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content-inner {
                padding: 0px 15px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__title {
                text-align: left;
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__subtitle {
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__desc {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons {
                padding: 0px 0px 20px 20px;
            }

            .elementor-8 .elementor-element.elementor-element-324663f > .elementor-element-populated {
                padding: 0px 20px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon {
                font-size: 60px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-content .elementor-icon-box-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-content .elementor-icon-box-description {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c > .elementor-widget-container {
                margin: 0px 0px 48px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-0bf2f27 > .elementor-element-populated {
                padding: 0px 20px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon {
                font-size: 60px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-content .elementor-icon-box-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-content .elementor-icon-box-description {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 > .elementor-widget-container {
                margin: 0px 0px 48px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-aa98d41 > .elementor-element-populated {
                padding: 0px 20px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon {
                font-size: 60px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-content .elementor-icon-box-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-content .elementor-icon-box-description {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 > .elementor-widget-container {
                margin: 0px 0px 48px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-9fc3256 {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 60px 15px 60px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-3dbf42b .elementor-heading-title {
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-3d17ce6 {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-69fec41 > .elementor-widget-container {
                margin: 0px 0px 40px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-f5b828b {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 70px 15px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-29e0204 .elementor-heading-title {
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-ce9f517 {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-3b658aa2 > .elementor-element-populated {
                margin: 0px 0px 0px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-424dad6 > .elementor-widget-container {
                margin: 0px 0px 30px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-9b62864 > .elementor-widget-container {
                margin: 0px 0px 30px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-275724c4 > .elementor-element-populated {
                margin: 0px 0px 0px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-4864bf3 > .elementor-widget-container {
                margin: 0px 0px 30px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-2eef13c > .elementor-widget-container {
                margin: 0px 0px 30px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-5af84e5 .elementor-heading-title {
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-5af84e5 > .elementor-widget-container {
                padding: 0px 80px 18px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-a14af1b > .elementor-widget-container {
                padding: 0px 40px 40px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-ccce977 {
                padding: 50px 15px 50px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-f68986b .elementor-heading-title {
                font-size: 48px;
                line-height: 48px;
            }

            .elementor-8 .elementor-element.elementor-element-19c3490 {
                font-size: 18px;
            }

            .elementor-8 .elementor-element.elementor-element-8506df7 > .elementor-element-populated {
                padding: 0px 15px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-340080cf > .elementor-element-populated {
                padding: 0px 0px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-202807ff > .elementor-element-populated {
                padding: 0px 15px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-4b929872 > .elementor-element-populated {
                padding: 0px 0px 0px 15px;
            }
        }

        @media (max-width: 767px) {
            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__content-inner {
                padding: 100px 15px 0px 15px;
                margin: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__title {
                font-size: 34px;
                line-height: 34px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__subtitle {
                font-size: 34px;
                line-height: 34px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider__desc {
                font-size: 16px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons {
                padding: 0px 0px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-3bb1233 .jet-slider .sp-buttons .sp-button {
                margin: 0px 0px 20px 8px;
            }

            .elementor-8 .elementor-element.elementor-element-324663f > .elementor-element-populated {
                margin: 0px 0px 30px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-icon {
                margin-bottom: 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063928c .elementor-icon-box-wrapper {
                text-align: center;
            }

            .elementor-8 .elementor-element.elementor-element-a2fef03 .jet-button__container {
                justify-content: center;
            }

            .elementor-8 .elementor-element.elementor-element-0bf2f27 > .elementor-element-populated {
                margin: 0px 0px 30px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-icon {
                margin-bottom: 0px;
            }

            .elementor-8 .elementor-element.elementor-element-063ca71 .elementor-icon-box-wrapper {
                text-align: center;
            }

            .elementor-8 .elementor-element.elementor-element-a815ed4 .jet-button__container {
                justify-content: center;
            }

            .elementor-8 .elementor-element.elementor-element-aa98d41 > .elementor-element-populated {
                margin: 0px 0px 30px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-icon {
                margin-bottom: 0px;
            }

            .elementor-8 .elementor-element.elementor-element-7985605 .elementor-icon-box-wrapper {
                text-align: center;
            }

            .elementor-8 .elementor-element.elementor-element-ab3a82c .jet-button__container {
                justify-content: center;
            }

            .elementor-8 .elementor-element.elementor-element-9fc3256 {
                padding: 70px 15px 40px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-3dbf42b {
                text-align: left;
            }

            .elementor-8 .elementor-element.elementor-element-3dbf42b .elementor-heading-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-3dbf42b > .elementor-widget-container {
                padding: 10px 0px 10px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-1162b07 .jet-button__container {
                justify-content: flex-start;
            }

            .elementor-8 .elementor-element.elementor-element-f5b828b {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 40px 15px 40px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-715be848 > .elementor-element-populated {
                padding: 0px 15px 0px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-29e0204 {
                text-align: left;
            }

            .elementor-8 .elementor-element.elementor-element-29e0204 .elementor-heading-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-29e0204 > .elementor-widget-container {
                padding: 0px 0px 5px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-3b658aa2 > .elementor-element-populated {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-424dad6 .elementor-icon-box-icon {
                margin-bottom: 15px;
            }

            .elementor-8 .elementor-element.elementor-element-9b62864 .elementor-icon-box-icon {
                margin-bottom: 15px;
            }

            .elementor-8 .elementor-element.elementor-element-275724c4 > .elementor-element-populated {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-4864bf3 .elementor-icon-box-icon {
                margin-bottom: 15px;
            }

            .elementor-8 .elementor-element.elementor-element-2eef13c .elementor-icon-box-icon {
                margin-bottom: 15px;
            }

            .elementor-8 .elementor-element.elementor-element-a069bfc {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-24f69a4f {
                padding: 20px 0px 40px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-5af84e5 {
                text-align: center;
            }

            .elementor-8 .elementor-element.elementor-element-5af84e5 .elementor-heading-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-5af84e5 > .elementor-widget-container {
                padding: 0px 0px 20px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-a14af1b .elementor-text-editor {
                text-align: center;
            }

            .elementor-8 .elementor-element.elementor-element-a14af1b > .elementor-widget-container {
                padding: 0px 0px 20px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-00d79f2 .jet-button__container {
                justify-content: center;
            }

            .elementor-8 .elementor-element.elementor-element-ccce977 {
                padding: 60px 15px 60px 15px;
            }

            .elementor-8 .elementor-element.elementor-element-f68986b {
                text-align: left;
            }

            .elementor-8 .elementor-element.elementor-element-f68986b .elementor-heading-title {
                font-size: 38px;
                line-height: 38px;
            }

            .elementor-8 .elementor-element.elementor-element-f68986b > .elementor-widget-container {
                padding: 20px 0px 15px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-19c3490 > .elementor-widget-container {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-8506df7 > .elementor-element-populated {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-340080cf > .elementor-element-populated {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-202807ff > .elementor-element-populated {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-4b929872 > .elementor-element-populated {
                padding: 0px 0px 0px 0px;
            }

            .elementor-8 .elementor-element.elementor-element-7b2f154f {
                padding: 20px 15px 0px 15px;
            }
        }

        @media (min-width: 768px) {
            .elementor-8 .elementor-element.elementor-element-ef32ad6 {
                width: 80%;
            }

            .elementor-8 .elementor-element.elementor-element-9bfd843 {
                width: 20%;
            }
        }

        @media (max-width: 1024px) and (min-width: 768px) {
            .elementor-8 .elementor-element.elementor-element-ef32ad6 {
                width: 100%;
            }

            .elementor-8 .elementor-element.elementor-element-8506df7 {
                width: 50%;
            }

            .elementor-8 .elementor-element.elementor-element-340080cf {
                width: 50%;
            }

            .elementor-8 .elementor-element.elementor-element-202807ff {
                width: 50%;
            }

            .elementor-8 .elementor-element.elementor-element-4b929872 {
                width: 50%;
            }
        }

        .elementor-595 .elementor-element.elementor-element-fc54a3a > .elementor-container {
            max-width: 1200px;
        }

        .elementor-bc-flex-widget .elementor-595 .elementor-element.elementor-element-2207caac.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-2207caac.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-2207caac.elementor-column > .elementor-column-wrap > .elementor-widget-wrap {
            justify-content: flex-end;
        }

        .elementor-595 .elementor-element.elementor-element-2207caac > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-595 .elementor-element.elementor-element-2207caac > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 15px 0px 15px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 {
            text-align: right;
            width: auto;
            max-width: auto;
            align-self: center;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon {
            background-color: #59636f;
            font-size: 15px;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon i {
            color: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon svg {
            fill: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon:not(:last-child) {
            margin-right: 15px;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon:hover {
            background-color: #3498db;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon:hover i {
            color: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon:hover svg {
            color: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 6px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-186247d5 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 40px;
            font-weight: 300;
            font-style: normal;
            text-decoration: none;
            line-height: 40px;
            letter-spacing: 0px;
            fill: #ffffff;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0);
            border-radius: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button:hover, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button:hover, .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button:focus, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button:focus {
            color: #ebebeb;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button:hover svg, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button:hover svg, .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button:focus svg, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button:focus svg {
            fill: #ebebeb;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-595 .elementor-element.elementor-element-7756cf58 {
            width: auto;
            max-width: auto;
        }

        .elementor-595 .elementor-element.elementor-element-fc54a3a:not(.elementor-motion-effects-element-type-background), .elementor-595 .elementor-element.elementor-element-fc54a3a > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: rgba(43, 49, 56, 0);
        }

        .elementor-595 .elementor-element.elementor-element-fc54a3a {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0px 15px 0px 15px;
            z-index: 1;
        }

        .elementor-595 .elementor-element.elementor-element-fc54a3a > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        .elementor-595 .elementor-element.elementor-element-1c7b5e16 > .elementor-container {
            max-width: 1200px;
        }

        .elementor-bc-flex-widget .elementor-595 .elementor-element.elementor-element-4a66f318.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-4a66f318.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-4a66f318 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-595 .elementor-element.elementor-element-4a66f318 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-67cc5435 .jet-logo {
            justify-content: flex-start;
        }

        .elementor-595 .elementor-element.elementor-element-67cc5435 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-67cc5435 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-bc-flex-widget .elementor-595 .elementor-element.elementor-element-75f8f9de.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-75f8f9de.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-75f8f9de > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-595 .elementor-element.elementor-element-75f8f9de > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--horizontal {
            justify-content: center;
            text-align: center;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--vertical .menu-item-link-top {
            justify-content: center;
            text-align: center;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--vertical-sub-bottom .menu-item-link-sub {
            justify-content: center;
            text-align: center;
        }

        body:not(.rtl) .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--horizontal .jet-nav__sub {
            text-align: left;
        }

        body.rtl .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--horizontal .jet-nav__sub {
            text-align: right;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item-link-top {
            color: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item-link-top .jet-nav-link-text {
            font-family: "Open Sans", Sans-serif;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 0px;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item:hover > .menu-item-link-top {
            color: #3498db;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item.current-menu-item .menu-item-link-top {
            color: #3498db;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav__mobile-trigger {
            color: #ffffff;
            font-size: 16px;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav__mobile-close-btn {
            color: #ffffff;
        }

        .elementor-595 .elementor-element.elementor-element-3799e593 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-bc-flex-widget .elementor-595 .elementor-element.elementor-element-2471860e.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-2471860e.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-595 .elementor-element.elementor-element-2471860e.elementor-column > .elementor-column-wrap > .elementor-widget-wrap {
            justify-content: flex-end;
        }

        .elementor-595 .elementor-element.elementor-element-2471860e > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-595 .elementor-element.elementor-element-2471860e > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button {
            font-family: "Open Sans", Sans-serif;
            font-size: 39px;
            font-weight: 300;
            font-style: normal;
            text-decoration: none;
            line-height: 40px;
            letter-spacing: 0px;
            fill: #ffffff;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0);
            border-radius: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button:hover, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button:hover, .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button:focus, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button:focus {
            color: #ebebeb;
        }

        .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button:hover svg, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button:hover svg, .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button:focus svg, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button:focus svg {
            fill: #ebebeb;
        }

        .elementor-595 .elementor-element.elementor-element-73134e17 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-595 .elementor-element.elementor-element-73134e17 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-595 .elementor-element.elementor-element-1c7b5e16:not(.elementor-motion-effects-element-type-background), .elementor-595 .elementor-element.elementor-element-1c7b5e16 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: rgba(99, 99, 99, 0);
        }

        .elementor-595 .elementor-element.elementor-element-1c7b5e16 {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0%;
            margin-bottom: -100%;
            padding: 25px 15px 25px 15px;
            z-index: 1;
        }

        .elementor-595 .elementor-element.elementor-element-1c7b5e16 > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        @media (max-width: 1024px) {
            .elementor-595 .elementor-element.elementor-element-186247d5 {
                text-align: left;
                width: 75%;
                max-width: 75%;
            }

            .elementor-595 .elementor-element.elementor-element-186247d5 > .elementor-widget-container {
                padding: 6px 25px 0px 0px;
            }

            .elementor-595 .elementor-element.elementor-element-7756cf58 a.elementor-button, .elementor-595 .elementor-element.elementor-element-7756cf58 .elementor-button {
                font-size: 22px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-595 .elementor-element.elementor-element-7756cf58 {
                width: 25%;
                max-width: 25%;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item-link-top {
                padding: 0px 15px 0px 0px;
            }

            .elementor-595 .elementor-element.elementor-element-2471860e > .elementor-element-populated {
                margin: 0px 0px 0px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-595 .elementor-element.elementor-element-73134e17 a.elementor-button, .elementor-595 .elementor-element.elementor-element-73134e17 .elementor-button {
                font-size: 22px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-595 .elementor-element.elementor-element-1c7b5e16 {
                padding: 15px 15px 15px 15px;
            }
        }

        @media (max-width: 767px) {
            .elementor-595 .elementor-element.elementor-element-186247d5 {
                text-align: center;
                width: 100%;
                max-width: 100%;
                align-self: center;
            }

            .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon {
                font-size: 15px;
            }

            .elementor-595 .elementor-element.elementor-element-186247d5 .elementor-social-icon:not(:last-child) {
                margin-right: 10px;
            }

            .elementor-595 .elementor-element.elementor-element-4a66f318 {
                width: 70%;
            }

            .elementor-595 .elementor-element.elementor-element-75f8f9de {
                width: 30%;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .jet-mobile-menu .menu-item-link {
                justify-content: flex-start;
                text-align: left;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--horizontal {
                justify-content: flex-start;
                text-align: left;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--vertical .menu-item-link-top {
                justify-content: flex-start;
                text-align: left;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav--vertical-sub-bottom .menu-item-link-sub {
                justify-content: flex-start;
                text-align: left;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .menu-item-link-top {
                padding: 15px 25px 15px 15px;
            }

            .elementor-595 .elementor-element.elementor-element-3799e593 .jet-nav {
                background-color: #635e5f;
            }

            .elementor-595 .elementor-element.elementor-element-2471860e {
                width: 100%;
            }

            .elementor-595 .elementor-element.elementor-element-1c7b5e16 {
                padding: 15px 15px 15px 15px;
            }
        }

        @media (min-width: 768px) {
            .elementor-595 .elementor-element.elementor-element-4a66f318 {
                width: 20%;
            }

            .elementor-595 .elementor-element.elementor-element-75f8f9de {
                width: 50.25%;
            }

            .elementor-595 .elementor-element.elementor-element-2471860e {
                width: 29.746%;
            }
        }

        @media (max-width: 1024px) and (min-width: 768px) {
            .elementor-595 .elementor-element.elementor-element-4a66f318 {
                width: 20%;
            }

            .elementor-595 .elementor-element.elementor-element-75f8f9de {
                width: 55%;
            }

            .elementor-595 .elementor-element.elementor-element-2471860e {
                width: 25%;
            }
        }

        .elementor-249 .elementor-element.elementor-element-2dfc037c > .elementor-container {
            max-width: 1200px;
        }

        .elementor-249 .elementor-element.elementor-element-7fb71eea > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-7fb71eea > .elementor-element-populated {
            margin: 20px 0px 25px 0px;
            padding: 0px 15px 0px 15px;
        }

        .elementor-249 .elementor-element.elementor-element-790c0894 {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-790c0894.elementor-widget-heading .elementor-heading-title {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-790c0894 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-790c0894 > .elementor-widget-container {
            margin: 5px 0px 35px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-790c0894 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-1cc9537b .elementor-text-editor {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-1cc9537b {
            color: #59636f;
            font-family: "Open Sans", Sans-serif;
            font-size: 15px;
            font-weight: 400;
            text-transform: uppercase;
            font-style: normal;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1cc9537b > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1cc9537b > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-2c139451 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-2c139451 > .elementor-element-populated {
            margin: 20px 0px 25px 0px;
            padding: 0px 15px 0px 70px;
        }

        .elementor-249 .elementor-element.elementor-element-9bace69 {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-9bace69.elementor-widget-heading .elementor-heading-title {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-9bace69 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-9bace69 > .elementor-widget-container {
            margin: 5px 0px 35px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-9bace69 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {
            padding-bottom: calc(10px / 2);
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {
            margin-top: calc(10px / 2);
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {
            margin-right: calc(10px / 2);
            margin-left: calc(10px / 2);
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items.elementor-inline-items {
            margin-right: calc(-10px / 2);
            margin-left: calc(-10px / 2);
        }

        body.rtl .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {
            left: calc(-10px / 2);
        }

        body:not(.rtl) .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {
            right: calc(-10px / 2);
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-icon i {
            color: #3498db;
            font-size: 17px;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-icon svg {
            fill: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-item:hover .elementor-icon-list-icon i {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-item:hover .elementor-icon-list-icon svg {
            fill: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-text {
            color: #59636f;
            padding-left: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-item:hover .elementor-icon-list-text {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 .elementor-icon-list-item {
            font-family: "Open Sans", Sans-serif;
            font-size: 15px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 20px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-6a782430 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-2b73e540 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-2b73e540 > .elementor-element-populated {
            margin: 20px 0px 25px 0px;
            padding: 0px 15px 0px 15px;
        }

        .elementor-249 .elementor-element.elementor-element-ffb26a4 {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-ffb26a4.elementor-widget-heading .elementor-heading-title {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-ffb26a4 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-ffb26a4 > .elementor-widget-container {
            margin: 5px 0px 35px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-ffb26a4 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .jet-posts__item {
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts {
            margin-right: -0px;
            margin-left: -0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .jet-posts__inner-box {
            border-radius: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .jet-posts__inner-content {
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .entry-title a {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .entry-title a:hover {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .entry-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 15px;
            font-weight: 400;
            text-transform: uppercase;
            font-style: normal;
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: left;
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .post-meta {
            color: #9798a6;
            font-family: "Montserrat", Sans-serif;
            font-size: 12px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 21px;
            letter-spacing: 0px;
            text-align: left;
            padding: 10px 0px 0px 0px;
            margin: 0px 0px 10px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .post-meta a {
            color: #9798a6;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .post-meta a:hover {
            color: #9798a6;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .entry-excerpt {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .jet-more {
            text-decoration: none;
            align-self: flex-start;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-posts .jet-more:hover {
            text-decoration: none;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-carousel .jet-slick-dots li {
            padding-left: 5px;
            padding-right: 5px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-carousel .jet-slick-dots {
            justify-content: center;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-title-fields__item-label {
            margin-right: 5px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 .jet-content-fields__item-label {
            margin-right: 5px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-503fb218 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-7a0e2142 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-7a0e2142 > .elementor-element-populated {
            margin: 20px 0px 25px 0px;
            padding: 0px 15px 0px 15px;
        }

        .elementor-249 .elementor-element.elementor-element-ffcaeda {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-ffcaeda.elementor-widget-heading .elementor-heading-title {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-ffcaeda .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-ffcaeda > .elementor-widget-container {
            margin: 5px 0px 35px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-ffcaeda > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form {
            width: 270px;
            padding: 0px 0px 0px 0px;
            margin: 0px 0px 0px 0px;
            border-radius: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__input {
            width: 270px;
            padding: 8px 50px 8px 11px;
            margin: 0px 0px 0px 0px;
            border-radius: 0px 0px 0px 0px;
            background-color: #fafafa;
            color: #000000;
            font-family: "Montserrat", Sans-serif;
            font-size: 13px;
            font-weight: 400;
            font-style: normal;
            line-height: 20px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__input::-webkit-input-placeholder {
            color: #000000;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__input::-moz-input-placeholder {
            color: #000000;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__input:focus {
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #32baa6;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__input.mail-invalid {
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color: #ff0000;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__submit-icon {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__submit {
            width: 270px;
            background-color: #59636f;
            color: #ffffff;
            padding: 6px 10px 8px 10px;
            margin: 15px 0px 25px 0px;
            border-radius: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__submit {
            font-family: "Montserrat", Sans-serif;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            font-style: normal;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__submit:hover {
            background-color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form__message .jet-subscribe-form__message-inner {
            justify-content: center;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form--response-error .jet-subscribe-form__message span {
            padding: 0px 0px 0px 0px;
            margin: -65px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-1b550fe6 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-eb966e9 {
            text-align: left;
        }

        .elementor-249 .elementor-element.elementor-element-eb966e9.elementor-widget-heading .elementor-heading-title {
            color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-eb966e9 .elementor-heading-title {
            font-family: "Open Sans", Sans-serif;
            font-size: 20px;
            font-weight: 300;
            text-transform: uppercase;
            font-style: normal;
            line-height: 25px;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-eb966e9 > .elementor-widget-container {
            margin: 5px 0px 15px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-eb966e9 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon {
            background-color: #59636f;
            font-size: 15px;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon i {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon svg {
            fill: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon:not(:last-child) {
            margin-right: 15px;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon:hover {
            background-color: #3498db;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon:hover i {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon:hover svg {
            color: #ffffff;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 > .elementor-widget-container {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-32ddf064 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-2dfc037c:not(.elementor-motion-effects-element-type-background), .elementor-249 .elementor-element.elementor-element-2dfc037c > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: #2b3138;
        }

        .elementor-249 .elementor-element.elementor-element-2dfc037c {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 50px 0px 15px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-2dfc037c > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        .elementor-249 .elementor-element.elementor-element-68101b42 > .elementor-container {
            max-width: 1200px;
        }

        .elementor-bc-flex-widget .elementor-249 .elementor-element.elementor-element-e106a38.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-249 .elementor-element.elementor-element-e106a38.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-249 .elementor-element.elementor-element-e106a38 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-e106a38 > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-72885f8b .jet-logo {
            justify-content: flex-start;
        }

        .elementor-249 .elementor-element.elementor-element-72885f8b > .elementor-widget-container {
            margin: 0px 15px 0px 15px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-72885f8b {
            flex-basis: 100%;
        }

        .elementor-249 .elementor-element.elementor-element-72885f8b > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-bc-flex-widget .elementor-249 .elementor-element.elementor-element-6391a6d.elementor-column .elementor-column-wrap {
            align-items: center;
        }

        .elementor-249 .elementor-element.elementor-element-6391a6d.elementor-column.elementor-element[data-element_type="column"] > .elementor-column-wrap.elementor-element-populated > .elementor-widget-wrap {
            align-content: center;
            align-items: center;
        }

        .elementor-249 .elementor-element.elementor-element-6391a6d > .elementor-column-wrap > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
            margin-bottom: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-6391a6d > .elementor-element-populated {
            margin: 0px 0px 0px 0px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-496fa741 .elementor-text-editor {
            text-align: right;
        }

        .elementor-249 .elementor-element.elementor-element-496fa741 {
            color: #9798a6;
            font-family: "Montserrat", Sans-serif;
            font-size: 14px;
            font-weight: 300;
            font-style: normal;
            line-height: 1.7em;
            letter-spacing: 0px;
        }

        .elementor-249 .elementor-element.elementor-element-496fa741 > .elementor-widget-container {
            margin: 0px 15px -15px 15px;
            padding: 0px 0px 0px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-496fa741 > .tippy-popper .tippy-tooltip .tippy-content {
            text-align: center;
        }

        .elementor-249 .elementor-element.elementor-element-68101b42:not(.elementor-motion-effects-element-type-background), .elementor-249 .elementor-element.elementor-element-68101b42 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
            background-color: #2b3138;
        }

        .elementor-249 .elementor-element.elementor-element-68101b42 {
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 15px 0px 15px 0px;
        }

        .elementor-249 .elementor-element.elementor-element-68101b42 > .elementor-background-overlay {
            transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
        }

        @media (min-width: 768px) {
            .elementor-249 .elementor-element.elementor-element-e106a38 {
                width: 25%;
            }

            .elementor-249 .elementor-element.elementor-element-6391a6d {
                width: 75%;
            }
        }

        @media (max-width: 1024px) and (min-width: 768px) {
            .elementor-249 .elementor-element.elementor-element-7fb71eea {
                width: 50%;
            }

            .elementor-249 .elementor-element.elementor-element-2c139451 {
                width: 50%;
            }

            .elementor-249 .elementor-element.elementor-element-2b73e540 {
                width: 50%;
            }

            .elementor-249 .elementor-element.elementor-element-7a0e2142 {
                width: 50%;
            }
        }

        @media (max-width: 1024px) {
            .elementor-249 .elementor-element.elementor-element-7fb71eea > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-249 .elementor-element.elementor-element-1cc9537b > .elementor-widget-container {
                margin: 0px 0px 0px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-2c139451 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 15px 0px 75px;
            }

            .elementor-249 .elementor-element.elementor-element-2b73e540 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-249 .elementor-element.elementor-element-7a0e2142 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 15px 0px 75px;
            }

            .elementor-249 .elementor-element.elementor-element-1b550fe6 .jet-subscribe-form--response-error .jet-subscribe-form__message span {
                margin: -65px 25px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-32ddf064 {
                text-align: center;
            }

            .elementor-249 .elementor-element.elementor-element-2dfc037c {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 50px 35px 25px 25px;
            }

            .elementor-249 .elementor-element.elementor-element-72885f8b {
                flex-basis: 100%;
            }
        }

        @media (max-width: 767px) {
            .elementor-249 .elementor-element.elementor-element-7fb71eea {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-7fb71eea > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-790c0894 > .elementor-widget-container {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-2c139451 {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-2c139451 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-9bace69 > .elementor-widget-container {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-2b73e540 {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-2b73e540 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-ffb26a4 > .elementor-widget-container {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-7a0e2142 {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-7a0e2142 > .elementor-element-populated {
                margin: 20px 0px 25px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-ffcaeda > .elementor-widget-container {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-1b550fe6 > .elementor-widget-container {
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-eb966e9 > .elementor-widget-container {
                margin: 0px 0px 20px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-32ddf064 {
                text-align: left;
            }

            .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon {
                font-size: 15px;
            }

            .elementor-249 .elementor-element.elementor-element-32ddf064 .elementor-social-icon:not(:last-child) {
                margin-right: 10px;
            }

            .elementor-249 .elementor-element.elementor-element-2dfc037c {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 15px 15px 15px 15px;
            }

            .elementor-249 .elementor-element.elementor-element-e106a38 {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-e106a38 > .elementor-element-populated {
                margin: 0px 0px 15px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-249 .elementor-element.elementor-element-72885f8b .jet-logo {
                justify-content: center;
            }

            .elementor-249 .elementor-element.elementor-element-72885f8b > .elementor-widget-container {
                margin: 0px 0px 0px 0px;
                padding: 0px 0px 0px 0px;
            }

            .elementor-249 .elementor-element.elementor-element-72885f8b {
                flex-basis: 270px;
                width: auto;
                max-width: auto;
            }

            .elementor-249 .elementor-element.elementor-element-6391a6d {
                width: 100%;
            }

            .elementor-249 .elementor-element.elementor-element-6391a6d > .elementor-element-populated {
                margin: 0px 0px 0px 0px;
                padding: 0px 15px 0px 15px;
            }

            .elementor-249 .elementor-element.elementor-element-496fa741 .elementor-text-editor {
                text-align: center;
            }

            .elementor-249 .elementor-element.elementor-element-68101b42 {
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 30px 0px 30px 0px;
            }
        }</style>
    <style type="text/css">/*
 * contextMenu.js v 1.4.0
 * Author: Sudhanshu Yadav
 * s-yadav.github.com
 * Copyright (c) 2013 Sudhanshu Yadav.
 * Dual licensed under the MIT and GPL licenses
**/

        .iw-contextMenu {
            box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10) !important;
            border: 1px solid #c8c7cc !important;
            border-radius: 11px !important;
            display: none;
            z-index: 1000000132;
            max-width: 300px !important;
            width: auto !important;
        }

        .dark-mode .iw-contextMenu,
        .TnITTtw-dark-mode.iw-contextMenu,
        .TnITTtw-dark-mode .iw-contextMenu {
            border-color: #747473 !important;
        }

        .iw-cm-menu {
            background: #fff !important;
            color: #000 !important;
            margin: 0px !important;
            padding: 0px !important;
            overflow: visible !important;
        }

        .dark-mode .iw-cm-menu,
        .TnITTtw-dark-mode.iw-cm-menu,
        .TnITTtw-dark-mode .iw-cm-menu {
            background: #525251 !important;
            color: #FFF !important;
        }

        .iw-curMenu {
        }

        .iw-cm-menu li {
            font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, Ubuntu, sans-serif !important;
            list-style: none !important;
            padding: 10px !important;
            padding-right: 20px !important;
            border-bottom: 1px solid #c8c7cc !important;
            font-weight: 400 !important;
            cursor: pointer !important;
            position: relative !important;
            font-size: 14px !important;
            margin: 0 !important;
            line-height: inherit !important;
            border-radius: 0 !important;
            display: block !important;
        }

        .dark-mode .iw-cm-menu li, .TnITTtw-dark-mode .iw-cm-menu li {
            border-bottom-color: #747473 !important;
        }

        .iw-cm-menu li:first-child {
            border-top-left-radius: 11px !important;
            border-top-right-radius: 11px !important;
        }

        .iw-cm-menu li:last-child {
            border-bottom-left-radius: 11px !important;
            border-bottom-right-radius: 11px !important;
            border-bottom: none !important;
        }

        .iw-mOverlay {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            top: 0px !important;
            left: 0px !important;
            background: #FFF !important;
            opacity: .5 !important;
        }

        .iw-contextMenu li.iw-mDisable {
            opacity: 0.3 !important;
            cursor: default !important;
        }

        .iw-mSelected {
            background-color: #F6F6F6 !important;
        }

        .dark-mode .iw-mSelected, .TnITTtw-dark-mode .iw-mSelected {
            background-color: #676766 !important;
        }

        .iw-cm-arrow-right {
            width: 0 !important;
            height: 0 !important;
            border-top: 5px solid transparent !important;
            border-bottom: 5px solid transparent !important;
            border-left: 5px solid #000 !important;
            position: absolute !important;
            right: 5px !important;
            top: 50% !important;
            margin-top: -5px !important;
        }

        .dark-mode .iw-cm-arrow-right, .TnITTtw-dark-mode .iw-cm-arrow-right {
            border-left-color: #FFF !important;
        }

        .iw-mSelected > .iw-cm-arrow-right {
        }

        /*context menu css end */</style>
    <style type="text/css">@-webkit-keyframes load4 {
                               0%,
                               100% {
                                   box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
                               }
                               12.5% {
                                   box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
                               }
                               25% {
                                   box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
                               }
                               37.5% {
                                   box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
                               }
                               50% {
                                   box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
                               }
                               62.5% {
                                   box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
                               }
                               75% {
                                   box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
                               }
                               87.5% {
                                   box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
                               }
                           }

        @keyframes load4 {
            0%,
            100% {
                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
            }
            12.5% {
                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
            }
            25% {
                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
            }
            37.5% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
            }
            50% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
            }
            62.5% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
            }
            75% {
                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
            }
            87.5% {
                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
            }
        }</style>
    <style type="text/css">/* This is not a zero-length file! */</style>
    <link rel="https://api.w.org/" href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-json/">
    <link rel="EditURI" type="application/rsd+xml" title="RSD"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/xmlrpc.php?rsd">
    <link rel="wlwmanifest" type="application/wlwmanifest+xml"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-includes/wlwmanifest.xml">
    <meta name="generator" content="WordPress 5.2.3">
    <link rel="canonical" href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/">
    <link rel="shortlink" href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/">
    <link rel="alternate" type="application/json+oembed"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fld-wp73.template-help.com%2Fwordpress%2Fprod_23276%2Fv1%2F">
    <link rel="alternate" type="text/xml+oembed"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fld-wp73.template-help.com%2Fwordpress%2Fprod_23276%2Fv1%2F&amp;format=xml">
    <link rel="icon"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/04/favicon.ico"
          sizes="32x32">
    <link rel="icon"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/04/favicon.ico"
          sizes="192x192">
    <link rel="apple-touch-icon-precomposed"
          href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/wp-content/uploads/2019/04/favicon.ico">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body class="home page-template page-template-page-templates page-template-fullwidth-content page-template-page-templatesfullwidth-content-php page page-id-8 layout-fullwidth blog-default elementor-default elementor-page elementor-page-8">
<?php $this->beginBody() ?>

<div id="page" class="site"><a class="skip-link screen-reader-text" href="#content">Skip to content</a>

<?=$this->render('_header', [
        'title' => $this->title,
]) ?>

        <?= Alert::widget() ?>
        <?= $content ?>
</div>

<footer id="colophon" class="site-footer ">
    <div data-elementor-type="jet_footer" data-elementor-id="249" class="elementor elementor-249"
         data-elementor-settings="[]">
        <div class="elementor-inner">
            <div class="elementor-section-wrap">
                <section
                        class="elementor-element elementor-element-2dfc037c elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="2dfc037c" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-7fb71eea elementor-column elementor-col-25 elementor-top-column"
                                 data-id="7fb71eea" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-790c0894 elementor-widget elementor-widget-heading"
                                             data-id="790c0894" data-element_type="widget"
                                             data-widget_type="heading.default">
                                            <div class="elementor-widget-container"><p
                                                        class="elementor-heading-title elementor-size-default">ABOUT</p>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-1cc9537b elementor-widget elementor-widget-text-editor"
                                             data-id="1cc9537b" data-element_type="widget"
                                             data-widget_type="text-editor.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-text-editor elementor-clearfix"><p>Be
                                                        informed with the hottest news from all over the world! We
                                                        monitor what
                                                        is happening every day and every minute. Read and enjoy our
                                                        articles
                                                        and news and explore this world with Worldmap!</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-2c139451 elementor-column elementor-col-25 elementor-top-column"
                                 data-id="2c139451" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-9bace69 elementor-widget elementor-widget-heading"
                                             data-id="9bace69" data-element_type="widget"
                                             data-widget_type="heading.default">
                                            <div class="elementor-widget-container"><p
                                                        class="elementor-heading-title elementor-size-default">
                                                    CATEGORIES</p></div>
                                        </div>
                                        <div class="elementor-element elementor-element-6a782430 elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list"
                                             data-id="6a782430" data-element_type="widget"
                                             data-widget_type="icon-list.default">
                                            <div class="elementor-widget-container">
                                                <ul class="elementor-icon-list-items">
                                                    <li class="elementor-icon-list-item"><a
                                                                href="<?=Url::home() ?>">
                                                            <span class="elementor-icon-list-icon"> <i
                                                                        class="fa fa-angle-right"
                                                                        aria-hidden="true"></i> </span> <span
                                                                    class="elementor-icon-list-text">home</span> </a></li>
                                                    <li class="elementor-icon-list-item"><a
                                                                href="<?=Url::toRoute(['site/about']) ?>">
                                                            <span class="elementor-icon-list-icon"> <i
                                                                        class="fa fa-angle-right"
                                                                        aria-hidden="true"></i> </span> <span
                                                                    class="elementor-icon-list-text">about</span> </a></li>
                                                    <li class="elementor-icon-list-item"><a
                                                                href="<?=Url::toRoute(['site/services']) ?>">
                                                            <span class="elementor-icon-list-icon"> <i
                                                                        class="fa fa-angle-right"
                                                                        aria-hidden="true"></i> </span> <span
                                                                    class="elementor-icon-list-text">Services</span> </a>
                                                    </li>
                                                    <li class="elementor-icon-list-item"><a
                                                                href="<?=Url::toRoute(['site/blog']) ?>">
                                                            <span class="elementor-icon-list-icon"> <i
                                                                        class="fa fa-angle-right"
                                                                        aria-hidden="true"></i> </span> <span
                                                                    class="elementor-icon-list-text">blog</span> </a></li>
                                                    <li class="elementor-icon-list-item"><a
                                                                href="<?=Url::toRoute(['site/contact']) ?>">
                                                            <span class="elementor-icon-list-icon"> <i
                                                                        class="fa fa-angle-right"
                                                                        aria-hidden="true"></i> </span> <span
                                                                    class="elementor-icon-list-text">contacts</span> </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-2b73e540 elementor-column elementor-col-25 elementor-top-column"
                                 data-id="2b73e540" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <?=$this->render('_recent-posts') ?>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-7a0e2142 elementor-column elementor-col-25 elementor-top-column"
                                 data-id="7a0e2142" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-ffcaeda elementor-widget elementor-widget-heading"
                                             data-id="ffcaeda" data-element_type="widget"
                                             data-widget_type="heading.default">
                                            <div class="elementor-widget-container"><p
                                                        class="elementor-heading-title elementor-size-default">
                                                    NEWSLETTER</p></div>
                                        </div>
                                        <div class="elementor-element elementor-element-1b550fe6 elementor-widget elementor-widget-jet-subscribe-form"
                                             data-id="1b550fe6" data-element_type="widget"
                                             data-widget_type="jet-subscribe-form.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-jet-subscribe-form jet-elements">
                                                    <div class="jet-subscribe-form jet-subscribe-form--inline-layout"
                                                         data-settings="{&quot;redirect&quot;:false,&quot;redirect_url&quot;:&quot;#&quot;,&quot;use_target_list_id&quot;:false,&quot;target_list_id&quot;:&quot;&quot;}">
                                                        <?php $form = \yii\widgets\ActiveForm::begin() ?>
                                                        <!--<form method="POST" action="#"
                                                              class="jet-subscribe-form__form">-->
                                                            <div class="jet-subscribe-form__input-group">
                                                                <div class="jet-subscribe-form__fields">

                                                                    <input
                                                                            class="jet-subscribe-form__input jet-subscribe-form__mail-field"
                                                                            type="email" name="email"
                                                                            placeholder="Enter Your E-mail"
                                                                            data-instance-data="[]"></div>
                                                                <a class="jet-subscribe-form__submit elementor-button elementor-size-md"
                                                                   href="#"><span
                                                                            class="jet-subscribe-form__submit-text">Subscribe</span></a>
                                                            </div>
                                                            <div class="jet-subscribe-form__message">
                                                                <div class="jet-subscribe-form__message-inner">
                                                                    <span></span></div>
                                                            </div>
                                                        <!--</form>-->
                                                        <?php \yii\widgets\ActiveForm::end(); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-eb966e9 elementor-widget elementor-widget-heading"
                                             data-id="eb966e9" data-element_type="widget"
                                             data-widget_type="heading.default">
                                            <div class="elementor-widget-container"><p
                                                        class="elementor-heading-title elementor-size-default">FOLLOW
                                                    US</p></div>
                                        </div>
                                        <div class="elementor-element elementor-element-32ddf064 elementor-shape-circle elementor-widget elementor-widget-social-icons"
                                             data-id="32ddf064" data-element_type="widget"
                                             data-widget_type="social-icons.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-social-icons-wrapper"><a href="#"
                                                                                               class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-ef9de6c"
                                                                                               target="_blank">
                                                        <span class="elementor-screen-only">Facebook</span> <i
                                                                class="fa fa-facebook"></i> </a> <a href="#"
                                                                                                    class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-0d7d94a"
                                                                                                    target="_blank"> <span
                                                                class="elementor-screen-only">Twitter</span> <i
                                                                class="fa fa-twitter"></i> </a> <a href="#"
                                                                                                   class="elementor-icon elementor-social-icon elementor-social-icon-google-plus elementor-repeater-item-ad83f22"
                                                                                                   target="_blank"> <span
                                                                class="elementor-screen-only">Google-plus</span> <i
                                                                class="fa fa-google-plus"></i> </a> <a href="#"
                                                                                                       class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-7f473ab"
                                                                                                       target="_blank">
                                                        <span class="elementor-screen-only">Linkedin</span> <i
                                                                class="fa fa-linkedin"></i> </a> <a href="#"
                                                                                                    class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-repeater-item-15d6e82"
                                                                                                    target="_blank"> <span
                                                                class="elementor-screen-only">Pinterest</span> <i
                                                                class="fa fa-pinterest"></i> </a> <a href="#"
                                                                                                     class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-96f744b"
                                                                                                     target="_blank"> <span
                                                                class="elementor-screen-only">Youtube</span> <i
                                                                class="fa fa-youtube"></i> </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                        class="elementor-element elementor-element-68101b42 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="68101b42" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-e106a38 elementor-column elementor-col-50 elementor-top-column"
                                 data-id="e106a38" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-72885f8b elementor-widget-mobile__width-auto elementor-widget elementor-widget-jet-logo"
                                             data-id="72885f8b" data-element_type="widget"
                                             data-widget_type="jet-logo.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-jet-logo jet-blocks">
                                                    <div class="jet-logo jet-logo-type-image jet-logo-display-block">
                                                        <a href="https://ld-wp73.template-help.com/wordpress/prod_23276/v1/"
                                                           class="jet-logo__link"><img src="img/logo.png"
                                                                                       class="jet-logo__img"
                                                                                       alt="Speed"
                                                                                       srcset="img/logo.png 2x"
                                                                                       width="411" height="112"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-6391a6d elementor-column elementor-col-50 elementor-top-column"
                                 data-id="6391a6d" data-element_type="column">
                                <div class="elementor-column-wrap  elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-496fa741 elementor-widget elementor-widget-text-editor"
                                             data-id="496fa741" data-element_type="widget"
                                             data-widget_type="text-editor.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-text-editor elementor-clearfix">&copy; <?= date('Y') ?> Speed.
                                                    All rights reserved. Theme design by <a href="#" rel="noopener">Zemez</a>
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
</footer>

<script type="text/javascript">var hasJetBlogPlaylist = 0;</script>
<script type="text/javascript">var wpcf7 = {
        "apiSettings": {
            "root": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-json\/contact-form-7\/v1",
            "namespace": "contact-form-7\/v1"
        }, "cached": "1"
    };</script>
<script type="text/javascript">var a3_lazyload_params = {"apply_images": "1", "apply_videos": "1"};</script>
<script type="text/javascript">var a3_lazyload_extend_params = {"edgeY": "0"};</script>
<script type="text/javascript">var elementorFrontendConfig = {
        "environmentMode": {"edit": false, "wpPreview": false},
        "is_rtl": false,
        "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600},
        "version": "2.7.2",
        "urls": {"assets": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-content\/plugins\/elementor\/assets\/"},
        "settings": {
            "page": [],
            "general": {"elementor_global_image_lightbox": "yes", "elementor_enable_lightbox_in_editor": "yes"}
        },
        "post": {"id": 8, "title": "HOME", "excerpt": ""}
    };</script>
<script type="text/javascript">var jetElements = {
        "ajaxurl": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-admin\/admin-ajax.php",
        "isMobile": "false",
        "templateApiUrl": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-json\/jet-elements-api\/v1\/elementor-template",
        "devMode": "false",
        "messages": {"invalidMail": "Please specify a valid e-mail"}
    };</script>
<script type="text/javascript">var JetTabsSettings = {
        "ajaxurl": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-admin\/admin-ajax.php",
        "isMobile": "false",
        "templateApiUrl": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-json\/jet-tabs-api\/v1\/elementor-template",
        "devMode": "false"
    };</script>
<script type="text/javascript">var JetTricksSettings = {
        "elements_data": {
            "sections": {
                "fc54a3a": {"view_more": false, "particles": "false", "particles_json": ""},
                "1c7b5e16": {"view_more": false, "particles": "false", "particles_json": ""},
                "5a5fda7": {"view_more": false, "particles": "false", "particles_json": ""},
                "9fc3256": {"view_more": false, "particles": "false", "particles_json": ""},
                "f5b828b": {"view_more": false, "particles": "false", "particles_json": ""},
                "24f69a4f": {"view_more": false, "particles": "false", "particles_json": ""},
                "a069bfc": {"view_more": false, "particles": "false", "particles_json": ""},
                "ccce977": {"view_more": false, "particles": "false", "particles_json": ""},
                "7b2f154f": {"view_more": false, "particles": "false", "particles_json": ""},
                "6fbc33d6": {"view_more": false, "particles": "false", "particles_json": ""},
                "2dfc037c": {"view_more": false, "particles": "false", "particles_json": ""},
                "68101b42": {"view_more": false, "particles": "false", "particles_json": ""}
            },
            "columns": [],
            "widgets": {
                "186247d5": [],
                "7756cf58": [],
                "67cc5435": [],
                "3799e593": [],
                "73134e17": [],
                "3bb1233": [],
                "063928c": [],
                "a2fef03": [],
                "063ca71": [],
                "a815ed4": [],
                "7985605": [],
                "ab3a82c": [],
                "3dbf42b": [],
                "3d17ce6": [],
                "69fec41": [],
                "1162b07": [],
                "29e0204": [],
                "ce9f517": [],
                "424dad6": [],
                "9b62864": [],
                "4864bf3": [],
                "2eef13c": [],
                "5af84e5": [],
                "a14af1b": [],
                "00d79f2": [],
                "f68986b": [],
                "19c3490": [],
                "2febaf8e": [],
                "4475b599": [],
                "1408a816": [],
                "4d7e4db3": [],
                "790c0894": [],
                "1cc9537b": [],
                "9bace69": [],
                "6a782430": [],
                "ffb26a4": [],
                "503fb218": [],
                "ffcaeda": [],
                "1b550fe6": [],
                "eb966e9": [],
                "32ddf064": [],
                "72885f8b": [],
                "496fa741": []
            }
        }
    };</script>
<script type="text/javascript">var JetBlogSettings = {"ajaxurl": "https:\/\/ld-wp73.template-help.com\/wordpress\/prod_23276\/v1\/wp-admin\/admin-ajax.php"};</script>


<a href="#" id="toTop" style="display: none;"><span></span></a><span id="elementor-device-mode"
                                                                     class="elementor-screen-only"></span>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
