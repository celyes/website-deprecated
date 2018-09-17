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

    public function add_view(){
        $this->view = $this->view + 1 ;
        $this->save();
        return true;
      }

      public function add_vote(){
        $this->vote = $this->vote + 1 ;
        $this->save();
        return true;
      }

      public function question_vote_by_idUser($idUser)
      {
        return $this->orderBy('vote', 'desc')
        ->where('user_id',$idUser)
        ->get();
      }

      public function question_confirmed($confirmed=TRUE)
      {
        if ($confirmed == TRUE)
        {
            return $this->orderBy('created_at', 'desc')
            ->where('confirmed',1)
            ->get();
        }
        else
        {
            return $this->orderBy('created_at', 'desc')
            ->where('confirmed',0)
            ->get();
        }
      }
}
