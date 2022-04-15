<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%answer}}`.
 */
class m220114_175225_create_answer_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%answer}}', [
            'id' => $this->primaryKey(),
            'body_answer' => 'LONGTEXT',
            'correctness_answer_count' => $this->integer(),
            'question_id' => $this->integer(),
            'created_at' => $this->integer(),
            'updated_at' => $this->integer(),
            'created_by' => $this->integer()
        ]);
        $this->addForeignKey('FK_answer_user_created_by', '{{%answer}}', 'created_by', '{{%user}}', 'id');
        $this->addForeignKey('FK_answer_question_question_id', '{{%answer}}', 'question_id', '{{%question}}', 'id');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('FK_answer_question_question_id', '{{%answer}}');
        $this->dropForeignKey('FK_answer_user_created_by', '{{%answer}}');
        $this->dropTable('{{%answer}}');
    }
}
