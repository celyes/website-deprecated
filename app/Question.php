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

    public function top_question_view_by_idCat($limit=100,$idCat)
    {
        return $this->orderBy('view', 'desc')
        ->where('categorie_id',$idCat)
        ->take($limit)
        ->get();
    }

    public function top_question_vote($limit=100)
    {
        return $this->orderBy('vote', 'desc')
        ->take($limit)
        ->get();
    }

    public function top_question_vote_by_idCat($limit=100,$idCat)
    {
        return $this->orderBy('vote', 'desc')
        ->where('categorie_id',$idCat)
        ->take($limit)
        ->get();
    }

    public function addView(){
        $this->view = $this->view + 1 ;
        $this->save();
        return true;
      }
}
