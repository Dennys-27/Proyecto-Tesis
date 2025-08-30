document.addEventListener('DOMContentLoaded', () => {
  // --- DASHBOARD CHART ---
  const dashboardCanvas = document.getElementById('dashboardChart');
  if (dashboardCanvas) {
    const ctx = dashboardCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
        datasets: [
          {
            label: 'Descargas',
            data: [12, 19, 3, 5, 2, 3, 10, 7],
            backgroundColor: 'rgba(59, 87, 249, 0.7)',
          },
          {
            label: 'Usuarios',
            data: [5, 10, 8, 12, 6, 9, 7, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Rendimiento del sistema' }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // --- GROUP CHART ---
  const groupCanvas = document.getElementById('groupChart');
  if (groupCanvas) {
    const ctxx = groupCanvas.getContext('2d');
    new Chart(ctxx, {
      type: 'bar',
      data: {
        labels: ['Grupo A','Grupo B','Grupo C'],
        datasets: [{
          label: 'Proyectos Aceptados (%)',
          data: [80, 60, 30],
          backgroundColor: ['#10b981','#f59e0b','#ef4444']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }
});

// --- DATATABLE con botones ---
$(document).ready(function () {
    $('#projectsTable').DataTable({
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'Exportar Excel',
                className: 'btn btn-success btn-sm'
            },
            {
                extend: 'pdfHtml5',
                text: 'Exportar PDF',
                className: 'btn btn-danger btn-sm'
            }
        ]
    });
});

