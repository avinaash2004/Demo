// Sample data for exercises and categories
const exercises = [
    { name: "Push Up", category: "Strength", description: "A basic upper body exercise." },
    { name: "Squat", category: "Strength", description: "A lower body exercise." },
    { name: "Running", category: "Cardio", description: "A great cardio workout." },
];

const categories = ["Strength", "Cardio", "Yoga", "Flexibility"];

// Function to display exercises
function displayExercises() {
    const exerciseList = document.getElementById('exercise-list');
    exercises.forEach(exercise => {
        const exerciseItem = document.createElement('div');
        exerciseItem.innerHTML = `<h3>${exercise.name}</h3><p>${exercise.description}</p>`;
        exerciseList.appendChild(exerciseItem);
    });
}

// Function to display categories
function displayCategories() {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.innerHTML = `<h3>${category}</h3>`;
        categoryList.appendChild(categoryItem);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    displayExercises();
    displayCategories();
});