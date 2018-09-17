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

    public function event_by_date($date)
    {
        return $this->orderBy('created_at', 'desc')
        ->whereDate('time_of_event', $date)
        ->get();
    }
}
