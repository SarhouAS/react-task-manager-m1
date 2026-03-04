# 💰 Budget Tracker

Application de gestion de budget personnel développée avec **React + Vite** dans le cadre d'un TP de 8h.

---

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

L'application tourne sur [http://localhost:5173](http://localhost:5173)

---

## ✨ Fonctionnalités

- ➕ Ajouter une transaction (revenu ou dépense)
- 🗑️ Supprimer une transaction
- 💹 Voir le solde total, les revenus et les dépenses
- 🔍 Filtrer par type (Tous / Revenus / Dépenses)
- 💾 Données sauvegardées automatiquement dans le `localStorage`

---

## 🗂️ Structure du projet

```
src/
├── components/
│   ├── Balance.jsx          → Affiche le solde, revenus et dépenses
│   ├── TransactionForm.jsx  → Formulaire d'ajout avec validation
│   ├── TransactionList.jsx  → Liste de toutes les transactions
│   ├── TransactionItem.jsx  → Une transaction individuelle
│   └── Filter.jsx           → Filtres par type
├── App.jsx                  → Composant racine + state global
├── main.jsx                 → Point d'entrée React
└── index.css                → Styles globaux
```

---

## 📦 Modèle de données

Chaque transaction est un objet de la forme :

```js
{
  id: Date.now(),
  title: "Salaire",
  amount: 1500,
  type: "income",   // "income" | "expense"
  date: "2026-03-04"
}
```

---

## 🌿 Branches Git

| Branche | Description |
|---|---|
| `feature/setup` | Initialisation du projet et structure des dossiers |
| `feature/data-model` | State global dans App.jsx |
| `feature/form` | Formulaire d'ajout avec validation |
| `feature/list` | Liste et suppression des transactions |
| `feature/balance` | Calcul du solde avec `reduce()` |
| `feature/filter` | Filtrage par type |
| `feature/storage` | Persistance avec `localStorage` |
| `feature/ui` | Styles et mise en page |

---

## 🛠️ Technologies

- [React](https://react.dev/) — bibliothèque UI
- [Vite](https://vitejs.dev/) — bundler et serveur de développement
- `useState` / `useEffect` — hooks React uniquement
- `localStorage` — persistance des données

---

## 👥 Répartition binôme

| Étudiant A | Étudiant B |
|---|---|
| Formulaire | Liste |
| LocalStorage | Balance |
| Validation | Filtre |

---

## 📋 Conventional Commits utilisés

| Préfixe | Usage |
|---|---|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `refactor` | Amélioration du code sans changement visible |
| `chore` | Configuration, setup |
| `style` | CSS et mise en page |