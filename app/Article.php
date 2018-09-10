<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function get_last_article($limit=100)
    {
        return $this->orderBy('created_at', 'desc')
        ->take($limit)
        ->get();
    }
}
