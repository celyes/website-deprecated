<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//___________________Route articles_______________________
Route::get('articles','ArticleController@index');
Route::get('articles/new','ArticleController@create');
Route::get('articles/{id}','ArticleController@show');
Route::get('articles/edit/{id}','ArticleController@edit');
Route::post('articles','ArticleController@store');
Route::put('articles/{id}','ArticleController@update');
Route::delete('articles/delete/{id}','ArticleController@destroy');
//___________________Route articles_______________________
