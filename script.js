document.addEventListener('DOMContentLoaded', function() {
    const animationBtn = document.getElementById('animation-btn');
    const framesBtn = document.getElementById('frames-btn');
    const contentArea = document.getElementById('content-area');

    // Función para mostrar la animación
    function showAnimation() {
        contentArea.innerHTML = `
            <div class="animation-container">
                <h2>La Historia de Dino y Cami</h2>
                <p>Una tierna historia de amistad</p>
                <div class="animation-placeholder">
                    <img src="animacion3.gif" alt="Animación Dino y Cami" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);">
                </div>
                <div class="story-description">
                    <h3>La Historia:</h3>
                    <ul>
                        <li>Dino descansa tranquilamente / Cami se siente un poco inquieta</li>
                        <li>Ve a Cami y se sorprende mucho, Cami a la vez se sorprende de verlo</li>
                        <li>Salta de felicidad al verla</li>
                        <li>Cami se conmueve al ver su reacción</li>
                    </ul>
                </div>
            </div>
        `;
    }

    // Función para mostrar los frames
    function showFrames() {
        contentArea.innerHTML = `
            <div class="frames-container">
                <h2 style="text-align: center; color: white; margin-bottom: 2rem;">Frames de la Historia</h2>
                <div class="frames-grid">
                    <div class="frame-item">
                        <img src="frame 1.png" alt="Dino descansando">
                        <p>Frame 1: Dino descansando</p>
                        <small>Dino está tranquilo hasta que ve a Cami</small>
                    </div>
                    <div class="frame-item">
                        <img src="frame 2.png" alt="Dino sorprendido">
                        <p>Frame 2: ¡Sorpresa!</p>
                        <small>Dino ve a Cami y se emociona</small>
                    </div>
                    <div class="frame-item">
                        <img src="frame 3.png" alt="Dino feliz">
                        <p>Frame 3: ¡Felicidad!</p>
                        <small>Dino salta de alegría</small>
                    </div>
                </div>
                <div class="cami-frames">
                    <h3 style="color: white; margin: 2rem 0 1rem 0;">Cami en la Historia:</h3>
                    <div class="frames-grid">
                        <div class="frame-item">
                            <img src="frame 1.png" alt="Cami aparece">
                            <p>Cami aparece</p>
                            <small>Expresión confundida</small>
                        </div>
                        <div class="frame-item">
                            <img src="frame 2.png" alt="Cami curiosa">
                            <p>Cami curiosa</p>
                            <small>¡Observando a Dino!</small>
                        </div>
                        <div class="frame-item">
                            <img src="frame 3.png" alt="Cami conmovida">
                            <p>Cami conmovida</p>
                            <small>Tierna al ver su felicidad</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Event listeners
    animationBtn.addEventListener('click', showAnimation);
    framesBtn.addEventListener('click', showFrames);

    // Efectos de hover
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
