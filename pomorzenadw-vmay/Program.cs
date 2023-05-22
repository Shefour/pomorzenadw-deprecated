using Microsoft.EntityFrameworkCore;
using PomorzeNadw_vJan.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors(c =>
c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddMvc(options => options.EnableEndpointRouting = false);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseMvc();
app.Use(async (ctx, next) =>
{
    await next();
    if (ctx.Response.StatusCode == 204)
    {
        ctx.Response.ContentLength = 0;
    }
});

app.MapFallbackToFile("index.html");

app.Run();
