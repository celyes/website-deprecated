<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelationResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('responses', function (Blueprint $table) {
            // Create foreign key columns
            $table->integer('question_id')->unsigned();
            $table->integer('document_id')->unsigned();
            $table->integer('user_id')->unsigned();
            // Relation
            $table->foreign('question_id')
            ->references()
            ->on()
            ->onDelete('cascade');
            
            $table->foreign('document_id')
            ->references('id')
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
        Schema::table('responses', function (Blueprint $table) {
            //
        });
    }
}
