<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelationDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('documents', function (Blueprint $table) {
            
            // Create foreign key columns 
            
            $table->intger('category_id')->unsigned();
            $table->integer('author_id')->unsigned();
            
            // Relations

            $table->foreign('category_id')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');
            
            $table->foreign('author_id')
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
        Schema::table('documents', function (Blueprint $table) {
            //
        });
    }
}
