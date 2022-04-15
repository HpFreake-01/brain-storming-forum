<?php

use yii\db\Migration;

/**
 * Class m220121_222221_add_password_to_user
 */
class m220121_222221_add_password_to_user extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%user}}', 'passwordKey', $this->string());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%user}}','passwordKey');

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m220121_222221_add_password_to_user cannot be reverted.\n";

        return false;
    }
    */
}
