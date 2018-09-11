<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelationEventsRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('event_registers', function (Blueprint $table) {
            // Create foreign keys column
            
            $table->integer('event_id')->unsigned();

            // Relation

            $table->foreign('event_id')
            ->references('id')
            ->on('events')
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
        Schema::table('event_registers', function (Blueprint $table) {
            //
        });
    }
}
