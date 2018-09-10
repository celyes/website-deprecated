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

    public function top_article_view($limit=100)
    {
        return $this->orderBy('view', 'desc')
        ->take($limit)
        ->get();
    }

    public function top_article_view_by_idCat($limit=100,$idCat)
    {
        return $this->orderBy('view', 'desc')
        ->where('categorie_id',$idCat)
        ->take($limit)
        ->get();
    }

    public function article_by_keyword($keyword)
    {
        return $this->where('keyword', 'like', '%' . $keyword . '%')->get();
    }

    public function article_by_title($title)
    {
        return $this->where('keyword', $title)->get();
    }

    public function top_article_vote($limit=100)
    {
        return $this->orderBy('vote', 'desc')
        ->take($limit)
        ->get();
    }
}
