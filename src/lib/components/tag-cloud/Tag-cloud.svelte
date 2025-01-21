<script lang="ts">
    import { onMount } from 'svelte';
  
    // Liste des mots-clés
    const words = [
      "BAINS", "Libération", "des consiences", "prénatales", "Thérapeutique", "Bien-être", "EXPERIENCE"
    ];
  
    let visibleWords: string[] = []; // Mots visibles
    let positions: {top: String, left: String, fontSize: String, color: String, direction: string}[] = [];

    const worldCloudWidth = 100;
    const worldCloudHeight = 40;

    const wordBounds: {top: String, left: String, height: string, width: string}[] = [];

    function doesWordIsOverlapping(newWord: {top: String, left: String, height: string, width: string}) {
        return wordBounds.some(existingWord => {
            return (
                newWord.left + newWord.width !== existingWord.left + existingWord.width ||
                newWord.top + newWord.height !== existingWord.top + existingWord.height
            )
        })
    }
  
    // Générer des positions et des directions aléatoires
    // function generatePositions() {
    //   const directions = ["left", "right", "top", "bottom"];
    //   const color = ["hsl(var(--dark-green-1))", "hsl(var(--dark-green-2))", "hsl(var(--light-green-1))", "hsl(var(--pink-1))"];
    //   return words.map((word) => {
    //     let position: {top: String, left: String, fontSize: String, color: String, direction: string, width: string, height: string};
    //     let tries = 0;
    //         const fontSize = Math.random() * 2 + 1; // Taille entre 1rem et 3rem
    //         const width = (word.length * fontSize * 0.6).toString(); // Approximatif
    //         const height = (fontSize * 1.2).toString(); // Approximatif
    //         position = {
    //             top: (Math.random() * (worldCloudHeight - 20) + 5).toString(), // Entre 10% et 90% de hauteur
    //             left: (Math.random() * (worldCloudWidth - 20) + 5).toString(), // Entre 10% et 90% de largeur
    //             fontSize: `${Math.random() * 2 + 1}rem`, // Taille entre 1rem et 3rem
    //             color: color[Math.floor(Math.random() * directions.length)], // Couleurs variées
    //             direction: directions[Math.floor(Math.random() * directions.length)],
    //             width,
    //             height
    //         };
    //         tries++;
    //     if (doesWordIsOverlapping(position) || tries < 100) {
    //         wordBounds.push(position);
    //         return position;
    //     } else {
    //         return position;
    //     }
    //   });
    // }
  
    function generatePositions() {
        const directions = ["left", "right", "top", "bottom"];
        const color = ["hsl(var(--dark-green-1))", "hsl(var(--dark-green-2))", "hsl(var(--light-green-1))", "hsl(var(--pink-1))"];
        
        return words.map(() => ({
            top: (Math.random() * (worldCloudHeight - 20) + 5).toString(),
            left: (Math.random() * (worldCloudWidth - 20) + 5).toString(),
            fontSize: `${Math.random() * 2 + 1}rem`, 
            color: color[Math.floor(Math.random() * directions.length)],
            direction: directions[Math.floor(Math.random() * directions.length)],
        }))
    };

    onMount(() => {
      positions = generatePositions();  
      let i = 0;
      const interval = setInterval(() => {
        if (i < words.length) {
          visibleWords = [...visibleWords, words[i]];
          i++;
        } else {
          clearInterval(interval); // Arrêter une fois que tous les mots sont visibles
        }
      }, 500); // 500ms entre chaque mot
    });
  </script>
  
  <style>
    .word-cloud {
      position: relative;
      width: 100vw; /* 50% de la largeur */
      height: 40vh; /* 50% de la hauteur */
      margin: auto;
      overflow: hidden;
      background: hsl(var(--beige-1));
      border: 2px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
  
    .word {
      position: absolute;
      font-weight: bold;
      white-space: nowrap;
    }
  
    /* Animations pour différentes directions */
    @keyframes slide-from-left {
      0% {
        transform: translateX(-150%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    @keyframes slide-from-right {
      0% {
        transform: translateX(150%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    @keyframes slide-from-top {
      0% {
        transform: translateY(-150%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    @keyframes slide-from-bottom {
      0% {
        transform: translateY(150%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  </style>
  
  <div class="word-cloud">
    {#each visibleWords as word, i}
      <span
        class="word"
        style="
          top: {positions[i]?.top}%;
          left: {positions[i]?.left}%;
          font-size: {positions[i]?.fontSize};
          color: {positions[i]?.color};
          animation: slide-from-{positions[i]?.direction} 2s ease-in-out forwards;
        "
      >
        {word}
      </span>
    {/each}
  </div>
  