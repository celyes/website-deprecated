<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function top_question_view($limit=100)
    {
        return $this->orderBy('view', 'desc')
        ->take($limit)
        ->get();
    }
}
