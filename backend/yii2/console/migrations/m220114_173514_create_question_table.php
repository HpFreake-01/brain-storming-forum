<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%question}}`.
 */
class m220114_173514_create_question_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%question}}', [
            'id' => $this->primaryKey(),
            'question_title' => $this->string(512),
            'body_question' => 'LONGTEXT',
            'tag' => $this->string(512),
            'created_at' => $this->integer(),
            'updated_at' => $this->integer(),
            'created_by' => $this->integer()
        ]);
        $this->addForeignKey('FK_question_user_created_by', '{{%question}}', 'created_by', '{{%user}}', 'id');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('FK_question_user_created_by', '{{%post}}');
        $this->dropTable('{{%question}}');
    }
}
