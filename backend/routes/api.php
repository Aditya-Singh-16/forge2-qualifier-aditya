<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskController;

Route::apiResource('tasks', TaskController::class);
use Illuminate\Support\Facades\DB;

Route::get('/debug-db', function () {
    return [
        'tables' => DB::select("SELECT name FROM sqlite_master WHERE type='table'")
    ];
});

Route::get('/run-migrate', function () {
    \Artisan::call('migrate', ['--force' => true]);

    return [
        'output' => \Artisan::output()
    ];
});	
