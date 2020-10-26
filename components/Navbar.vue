<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Пятнашки</a>
    <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
            data-target="#navbarNav" data-toggle="collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" exact no-prefetch to="/">Game
            </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
