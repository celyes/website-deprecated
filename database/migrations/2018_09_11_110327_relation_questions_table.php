<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelationQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            //
            $table->integer('admin_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->integer('document_id')->unsigned();
            $table->integer('user_id')->unsigned();
            // Setting up foreign keys
            $table->foreign('admin_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');

            $table->foreign('category_id')
            ->references('id')
            ->on('categories')
            ->onDelete('casacde');
            
            $table->foreign('document_id')
            ->references('id_doc')
            ->on('documents')
            ->onDelete('cascade');

            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('questions', function (Blueprint $table) {
            //
        });
    }
}
