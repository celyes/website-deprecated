<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function last_event($limit=100)
    {
        return $this->orderBy('created_at', 'desc')
        ->take($limit)
        ->get();
    }
}
