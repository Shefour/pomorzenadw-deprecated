using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pomorzenadw_vmay.Migrations
{
    /// <inheritdoc />
    public partial class mssqlonprem_migration_513 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "imageCount",
                table: "Places",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imageCount",
                table: "Places");
        }
    }
}
