<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%service}}`.
 */
class m200128_123730_create_service_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%service}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(),
            'client' => $this->string(),
            'info' => $this->string(),
            'content' => $this->text(),
            'user_id' => $this->integer(),
            'category_id' => $this->integer(),
            'created_at' => $this->date(),
        ]);
        $this->addForeignKey('fk-service-user_id', '{{%service}}', 'user_id', '{{%user}}',
            'id', 'CASCADE');
        $this->addForeignKey('fk-service-category_id', '{{%service}}', 'category_id', '{{%category}}',
            'id', 'CASCADE');
        $this->createIndex('idx-service-user_id','{{%service}}','user_id');
        $this->createIndex('idx-service-category_id','{{%service}}','category_id');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-service-user_id','{{%service}}');
        $this->dropForeignKey('fk-service-category_id','{{%service}}');
        $this->dropIndex('idx-service-user_id','{{%service}}');
        $this->dropIndex('idx-service-category_id','{{%service}}');
        $this->dropTable('{{%service}}');
    }
}
