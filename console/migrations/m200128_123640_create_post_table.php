<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%post}}`.
 */
class m200128_123640_create_post_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%post}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(),
            'content'=> $this->text(),
            'user_id' => $this->integer(),
            'category_id' => $this->integer(),
            'created_at' => $this->date()
        ]);
        $this->addForeignKey('fk-post-user_id', '{{%post}}', 'user_id', '{{%user}}',
            'id', 'CASCADE');
        $this->addForeignKey('fk-post-category_id', '{{%post}}', 'category_id', '{{%category}}',
            'id', 'CASCADE');
        $this->createIndex('idx-post-user_id','{{%post}}','user_id');
        $this->createIndex('idx-post-category_id','{{%post}}','category_id');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-post-user_id','{{%post}}');
        $this->dropForeignKey('fk-post-category_id','{{%post}}');
        $this->dropIndex('idx-post-user_id','{{%post}}');
        $this->dropIndex('idx-post-category_id','{{%post}}');
        $this->dropTable('{{%post}}');
    }
}
